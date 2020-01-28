import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.css']
})
export class ChronometreComponent implements OnInit {

  public second: number;
  public minute: number;
  public hour: number;

  public chronometre: string;

  constructor() { }

  ngOnInit() {
    this.chronometre = '00 : 00 : 00';
  }

}
