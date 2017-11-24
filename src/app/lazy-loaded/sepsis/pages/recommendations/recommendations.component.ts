import { Component, OnInit } from '@angular/core';
import {SepsisRecommendationsService} from '../../../../core/services/sepsis-recommendations.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  content$: Observable<any>;

  constructor(private service: SepsisRecommendationsService) { }

  ngOnInit() {
    this.content$ = this.service.getContent();
  }

}
