import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { StoringListComponent } from './storing-list/storing-list.component';
import { StoringIncomingComponent } from './storing-incoming/storing-incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';

const routes: Routes = [
  {
    path: '',
    component: StoringListComponent,
  },
  {
    path: 'in',
    component: StoringIncomingComponent,
  },
  {
    path: 'out',
    component: OutgoingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
