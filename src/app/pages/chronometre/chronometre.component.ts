import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.css']
})
export class ChronometreComponent implements OnInit {

  public chronometre: string;

  private second = 0;
  private minute = 0;
  private hour = 0;

  constructor() { }

  ngOnInit() {
    this.chronometre = '00 : 00 : 00';
  }

  updateChrono = () => {
    this.second++;
    // check si les variables sont inférieurs à 10, j'ai la haine de faire ça aussi dégueulassment
    const checkDigitNumber = () => {
      if (this.hour < 10) {
        this.chronometre = `0${this.hour} : ${this.minute} : ${this.second}`;
      }
      if (this.minute < 10) {
        this.chronometre = `${this.hour} : 0${this.minute} : ${this.second}`;
      }
      if (this.second < 10) {
        this.chronometre = `${this.hour} : ${this.minute} : 0${this.second}`;
      }
      if (this.hour < 10 && this.minute < 10) {
        this.chronometre = `0${this.hour} : 0${this.minute} : ${this.second}`;
      }
      if (this.second < 10 && this.hour < 10) {
        this.chronometre = `0${this.hour} : ${this.minute} : 0${this.second}`;
      }
      if (this.second < 10 && this.minute < 10) {
        this.chronometre = `${this.hour} : 0${this.minute} : 0${this.second}`;
      }
      if (this.second < 10 && this.minute < 10 && this.hour < 10) {
        this.chronometre = `0${this.hour} : 0${this.minute} : 0${this.second}`;
      }
    };
    const numGreaterThan10 = () => {
      if (this.second > 59) {
        this.second = 0;
        this.minute ++;
      }
      if (this.minute > 59) {
        this.minute = 0;
        this.hour ++;
      }
    };
    numGreaterThan10();
    checkDigitNumber();
  }

public startChrono = () => {
  setInterval(() => {
    this.updateChrono();
  }, 1000);
}
}
