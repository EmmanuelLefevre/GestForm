import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  result: any;

  constructor() {}

  ngOnInit(): void {}
  
  intervalNumber() {
    var min = -1000;
    var max = 1000;
    var n = Math.floor(Math.random() * (max - min) + min);
    console.log(n);

    // Si le nombre est divisible par 3 et par 5
    if (n% 3 == 0 && n% 5 == 0) {
      console.log('Le chiffre saisi est divisible par 3 et par 5 => "Gestform"');
      this.result = "Gestform"
      let audio = new Audio();
      audio.src = "../assets/sound/applause.wav";
      audio.load();
      audio.play();
      return this.result;

    // Si le nombre est divisible par 5
    } else if (n % 5 == 0) {
      console.log('Le chiffre saisi est divisible par 5 => "Forme"');
      this.result = "Forme"
      return this.result;

    // Si le nombre est divisible par 3
    } else if (n % 3 == 0) {
      console.log('Le chiffre saisi est divisible par 3 => "Geste"');
      this.result = "Geste"
      return this.result;

    // Sinon on affiche le nombre n
    } else {
      console.log(n);
      this.result = n
      return this.result;
    }

  }

}
