import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SepsisRecommendationsService {

  constructor(private http: HttpClient) { }

  getContent(): Observable<any> {
    return this.http.get<any>('api/sepsisRecommendations');
  }

}
