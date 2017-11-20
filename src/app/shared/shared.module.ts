import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule
  ],
  declarations: []
})
export class SharedModule { }
