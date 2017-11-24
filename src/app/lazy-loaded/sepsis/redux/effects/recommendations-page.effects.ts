import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import * as recommendationsPage from '../actions/recommendations-page.actions';
import {SepsisRecommendationsService} from '../../services/sepsis-recommendations.service';

@Injectable()
export class RecommendationsPageEffects {

  constructor(private actions: Actions,
              private service: SepsisRecommendationsService) {
  }

  @Effect() loadPage: Observable<Action> = this.actions.ofType(recommendationsPage.LOAD_PAGE)
    .switchMap(() =>
      this.service.getContent().map(data => {
        return new recommendationsPage.LoadSuccess(data);
      })
    );
}
