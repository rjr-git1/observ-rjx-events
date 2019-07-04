import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import {CustomerDataComponent} from './customer/customer-data/customer-data.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/:id', component: CustomerDataComponent},
  {path: 'suppliers', component: SuppliersListComponent},
  {path: 'storing',
  loadChildren: () => import('./storing/storing.module').then(mod => mod.StoringModule)
  },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
