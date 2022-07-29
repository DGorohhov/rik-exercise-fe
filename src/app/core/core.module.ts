import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {CivilianService} from './service/civilian.service';
import {CompanyService} from './service/company.service';
import {ErrorService} from './service/error.service';
import {EventListService} from './service/event-list.service';
import {EventService} from './service/event.service';
import {PopupService} from './service/popup.service';

import {HttpErrorInterceptor} from './service/http-error.interceptor';

import {FooterComponent} from './footer/footer.component';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    TopNavigationComponent,
    FooterComponent
  ],
  providers: [
    ErrorService,
    EventService,
    EventListService,
    CivilianService,
    CompanyService,
    PopupService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is loaded. Import it in the AppModule only');
    }
  }
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
