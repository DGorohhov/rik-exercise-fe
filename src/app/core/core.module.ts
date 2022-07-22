import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {FooterComponent} from './footer/footer.component';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    TopNavigationComponent,
    FooterComponent
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
