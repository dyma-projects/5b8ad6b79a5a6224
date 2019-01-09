import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public result: number = 0; 
  

  constructor() { }

  ngOnInit() {}

  updateCounter(event) {
    this.result = event.value;

  }
}
