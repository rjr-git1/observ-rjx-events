import { Component, OnInit } from '@angular/core';
import {JsonExampleService} from '../json-example.service';


@Component({
  selector: 'app-json-example',
  templateUrl: './json-example.component.html',
  styleUrls: ['./json-example.component.css']
})
export class JsonExampleComponent implements OnInit {
 jsonData: any;

  constructor(private jsonService: JsonExampleService) { }

  getList(){
    this.jsonService.getList$().subscribe((response) => this.jsonData = response);
  }

  ngOnInit() {
    this.getList()
  }

}
