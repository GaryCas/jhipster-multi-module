import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipstermultimodukleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipstermultimodukleSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipstermultimodukleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstermultimodukleSharedModule {
  static forRoot() {
    return {
      ngModule: JhipstermultimodukleSharedModule
    };
  }
}
