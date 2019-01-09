import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  
 
  public valeur: ElementRef;
  @ViewChild('f') public el: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  addInput() {
    console.log(this.el.nativeElement.value);
    this.valeur = this.el.nativeElement.value;
  }
}
