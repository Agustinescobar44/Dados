import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dadoIzq = "../assets/img/dice1.png";
  dadoDere = "../assets/img/dice1.png";
  numero1 = 1;
  numero2 = 2;

  rodarDados():void {
    this.numero1 = Math.floor(Math.random() * 6) + 1;
    this.numero2 = Math.floor(Math.random() * 6) + 1;
    this.dadoIzq = `../assets/img/dice${this.numero1}.png`;
    this.dadoDere = `../assets/img/dice${this.numero2}.png`;
  }

}
