import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SuppliersRequestComponent } from './suppliers-request/suppliers-request.component';

@NgModule({
  declarations: [SuppliersListComponent, SuppliersRequestComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  exports: [SuppliersListComponent, SuppliersRequestComponent]
})
export class SuppliersModule { }
