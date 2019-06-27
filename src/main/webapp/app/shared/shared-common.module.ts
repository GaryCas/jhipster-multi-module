import { NgModule } from '@angular/core';

import { JhipstermultimodukleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipstermultimodukleSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipstermultimodukleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipstermultimodukleSharedCommonModule {}
