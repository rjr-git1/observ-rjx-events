import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
import customers from '../../shared/data/data';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})

export class CustomerDataComponent implements OnInit {
  public identifier:any;
  public selectedCustomer : Object;

  constructor(private route: ActivatedRoute) {

    }

   ngOnInit() {
    //lo que sucede durante el evento de carga , la carga no se bloquea
    //alternative1 this.route.params.subscribe(miParams => {  this.identifier =  miParams['id'];  // (+) converts string 'id' to a number
    //altenative2//
    this.identifier = this.route.snapshot.params['id']; // only if navigation remains the same (> create an instance of a new object everytime, going back and forth), on the contrary its best to use alternative1.
    this.selectedCustomer =  customers.find(e => {return e.index == this.identifier});
  }

}
