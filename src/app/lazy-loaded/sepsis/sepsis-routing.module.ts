import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'recommendations', component: RecommendationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SepsisRoutingModule { }
