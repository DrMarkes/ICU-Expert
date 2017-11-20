import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router/src/router_module';
import { LazyRoutingModule } from '../lazy-routing.module';
import { Routes } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    LazyRoutingModule
  ],
  declarations: [HomeComponent]
})
export class CommunityAcquiredPneumoniаModule { }
