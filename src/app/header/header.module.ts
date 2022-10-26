import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';

const EXPORTABLE_COMPS = [HeaderComponent];

@NgModule({
  declarations: EXPORTABLE_COMPS,
  exports: EXPORTABLE_COMPS,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ]
})
export class HeaderModule { }
