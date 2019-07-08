import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import {Observable, fromEvent} from 'rxjs';
import {throttleTime, switchMap} from 'rxjs/operators';




@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
joke$: Observable<string>;
  constructor(private jokes: JokesService) { }  // para traer el servicio tenemos que definirlo dentro del contructor
  public joke: any;


/*Método 1 : Obtenemos JSON y nos subscribimos a él

  getRandom(){
    this.joke$ = this.jokes.getRandom$();
   .subscribe((joke) => this.joke = joke);*/

/* Método2: Obtenemos el valor Joke del JSON y nos subscribimos con el pipe
getRandom(){
   this.joke$= this.jokes.getRandom$();}
*/

ngOnInit() {
  this.joke$ =
  fromEvent<MouseEvent>
  (document.getElementById('joke-btn'), 'click').pipe(throttleTime(1000),
  switchMap(
    (e: MouseEvent) => this.jokes.getRandom$(
  )));
}
}
