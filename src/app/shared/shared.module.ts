import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../material/material.module';

import {ParticipantFormComponent} from './participant-form/participant-form.component';
import {ErrorSnackbarComponent} from './error-snackbar/error-snackbar.component';
import {GenericErrorComponent} from './generic-error/generic-error.component';

@NgModule({
  declarations: [
    ParticipantFormComponent,
    ErrorSnackbarComponent,
    GenericErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    ParticipantFormComponent,
    GenericErrorComponent
  ]
})
export class SharedModule { }
