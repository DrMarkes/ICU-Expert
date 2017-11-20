import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityAcquiredPneumoniаModule } from './lazy-loaded/community-acquired-pneumoniа/community-acquired-pneumoniа.module';
import { LazyRoutingModule } from './lazy-loaded/lazy-routing.module';

const routes: Routes = [
  {
    path: 'comm-acq-pneumonia',
    loadChildren:
      'app/lazy-loaded/community-acquired-pneumoniа/community-acquired-pneumoniа.module#CommunityAcquiredPneumoniаModule'}
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
