import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PneumoniaRoutingModule } from './pneumonia-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PneumoniaRoutingModule
  ],
  declarations: [HomeComponent]
})
export class CommunityAcquiredPneumoniаModule { }
