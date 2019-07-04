import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {
  nombreRecibido = '';
  passRecibida = '';
  placeholders = {
    'username': 'Teclea tu nombre de usuario',
    'userpass': 'Teclea tu contraseña'
  };
   constructor() { }
   recibirDatos(nombre, pass) {
    this.nombreRecibido = nombre.value;
    this.passRecibida = pass.value;
  }
   ngOnInit() {
  }
}
