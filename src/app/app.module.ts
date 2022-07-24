import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';

import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {EventPreviewComponent} from './feature/home/event-preview/event-preview.component';
import {HomeComponent} from './feature/home/home.component';
import { EventComponent } from './feature/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventPreviewComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
