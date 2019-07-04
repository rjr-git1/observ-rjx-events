import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilldingRoutingModule } from './billding-routing.module';
import { FromSuppliersComponent } from './from-suppliers/from-suppliers.component';
import { ToCustomersComponent } from './to-customers/to-customers.component';

@NgModule({
  declarations: [FromSuppliersComponent, ToCustomersComponent],
  imports: [
    CommonModule,
    BilldingRoutingModule
  ],
  exports: [FromSuppliersComponent, ToCustomersComponent]
})
export class BilldingModule { }
