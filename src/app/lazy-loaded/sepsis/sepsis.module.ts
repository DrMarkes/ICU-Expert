import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { SepsisRoutingModule } from './sepsis-routing.module';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';
import { InfectionComponent } from './components/infection/infection.component';
import { QSofaComponent } from './components/q-sofa/q-sofa.component';
import { SofaComponent } from './components/sofa/sofa.component';
import { SofaSelectComponent } from './components/sofa-select/sofa-select.component';
import { SepsisComponent } from './components/sepsis/sepsis.component';
import { ShockComponent } from './components/shock/shock.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { SepsisRecommendationsService } from './services/sepsis-recommendations.service';
import { reducers } from './redux/reducers/index';
import { RecommendationsPageEffects } from './redux/effects/recommendations-page.effects';

@NgModule({
  imports: [
    SharedModule,
    SepsisRoutingModule,
    StoreModule.forFeature('sepsis', reducers),
    EffectsModule.forFeature([RecommendationsPageEffects])
  ],
  declarations: [
    HomeComponent,
    DiagnosisComponent,
    InfectionComponent,
    QSofaComponent,
    SofaComponent,
    SofaSelectComponent,
    SepsisComponent,
    ShockComponent,
    RecommendationsComponent
  ],
  providers: [SepsisRecommendationsService]
})
export class SepsisModule { }
