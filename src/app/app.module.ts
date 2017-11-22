import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { PneumoniaRoutingModule } from './lazy-loaded/community-acquired-pneumoni\u0430/pneumonia-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
