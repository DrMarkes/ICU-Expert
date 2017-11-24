import { Component, OnInit } from '@angular/core';
import { SepsisRecommendationsService } from '../../services/sepsis-recommendations.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {getRecommendationsContent, getRecommendationsState, State} from '../../redux/reducers/index';
import * as recommendationsPageActions from '../../redux/actions/recommendations-page.actions';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  content$: Observable<any>;
  contents: Observable<any>;

  constructor(private service: SepsisRecommendationsService,
              private store: Store<State>) { }

  ngOnInit() {
    this.store.select('sepsis', 'recommendations', 'loaded').subscribe(data => {
      if (!data) {
        this.store.dispatch(new recommendationsPageActions.LoadPage());
      }
    });
    this.contents = this.store.select(getRecommendationsContent);
    this.content$ = this.service.getContent();
  }

}
