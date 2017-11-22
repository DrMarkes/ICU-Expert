import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { SepsisRoutingModule } from './sepsis-routing.module';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { InfectionComponent } from './components/infection/infection.component';
import { QSofaComponent } from './components/q-sofa/q-sofa.component';
import { SofaComponent } from './components/sofa/sofa.component';
import { SofaSelectComponent } from './components/sofa-select/sofa-select.component';
import { SepsisComponent } from './components/sepsis/sepsis.component';
import { ShockComponent } from './components/shock/shock.component';

@NgModule({
  imports: [
    SharedModule,
    SepsisRoutingModule
  ],
  declarations: [
    HomeComponent,
    DiagnosisComponent,
    TreatmentComponent,
    InfectionComponent,
    QSofaComponent,
    SofaComponent,
    SofaSelectComponent,
    SepsisComponent,
    ShockComponent]
})
export class SepsisModule { }
