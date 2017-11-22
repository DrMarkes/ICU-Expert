import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'comm-acq-pneumonia',
    loadChildren:
      'app/lazy-loaded/community-acquired-pneumoniа/community-acquired-pneumoniа.module#CommunityAcquiredPneumoniаModule'
  },
  {
    path: 'sepsis',
    loadChildren:
      'app/lazy-loaded/sepsis/sepsis.module#SepsisModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
