import { NgModule } from '@angular/core';

import { ArdsRoutingModule } from './ards-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    ArdsRoutingModule
  ],
  declarations: [HomeComponent]
})
export class ArdsModule { }
