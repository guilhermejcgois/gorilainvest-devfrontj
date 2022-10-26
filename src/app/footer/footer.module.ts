import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

const EXPORTABLE_COMPS = [FooterComponent];

@NgModule({
  declarations: EXPORTABLE_COMPS,
  exports: EXPORTABLE_COMPS,
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
