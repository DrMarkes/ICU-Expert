import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {getRecommendationsContent, getRecommendationsLoaded, State} from '../../redux/reducers/index';
import * as recommendationsPageActions from '../../redux/actions/recommendations-page.actions';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  content$: Observable<any>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select(getRecommendationsLoaded).subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new recommendationsPageActions.LoadPage());
      }
    });
    this.content$ = this.store.select(getRecommendationsContent);
  }

}
