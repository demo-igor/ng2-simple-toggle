import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleToggleComponent } from './simple-toggle.component';

@NgModule({
  declarations: [ SimpleToggleComponent ],
  imports: [ CommonModule ],
  exports: [ SimpleToggleComponent ]
})
export class SimpleToggleModule { }
