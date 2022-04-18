import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  doarAlimentos() {
    window
      .open(
        'https://www.google.com/maps/search/?api=1&query=ponto+doacao+de+alimento',
        '_blank'
      )
      .focus();
  }
  doarRoupas() {
    window
      .open(
        'https://www.google.com/maps/search/?api=1&query=ponto+doacao+de+roupas',
        '_blank'
      )
      .focus();
  }
  doarSangue() {
    window
      .open(
        'https://www.google.com/maps/search/?api=1&query=doacao+de+sangue',
        '_blank'
      )
      .focus();
  }
}
