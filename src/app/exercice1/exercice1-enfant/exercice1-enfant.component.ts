import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  valeurCompteur: number = 0;
  @Output("changement") changementCompteur = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.valeurCompteur++;
    this.changementCompteur.emit({
      value: this.valeurCompteur
    })
  }

  decrement(){
    this.valeurCompteur--;
    this.changementCompteur.emit({
      value: this.valeurCompteur
    })
  }
}
