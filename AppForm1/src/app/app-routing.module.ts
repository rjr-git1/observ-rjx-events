import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';



const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'form', loadChildren: () => import('./myform/myform.module').then(mod => mod.MyformModule)
 },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
