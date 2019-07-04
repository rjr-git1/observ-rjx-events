import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoringRoutingModule } from './storing-routing.module';
import { StoringListComponent } from './storing-list/storing-list.component';
import { StoringIncomingComponent } from './storing-incoming/storing-incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';

@NgModule({
  declarations: [StoringListComponent, StoringIncomingComponent, OutgoingComponent],
  imports: [
    CommonModule,
    StoringRoutingModule
  ],
  exports: [StoringListComponent, StoringIncomingComponent, OutgoingComponent]
})
export class StoringModule { }
