import { Application } from './../../shared/application';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-select',
  templateUrl: './mode-select.component.html',
  styleUrls: ['./mode-select.component.css']
})
export class ModeSelectComponent implements OnInit {

  public modes: Application[] = [
    { name: 'Chronomètre', background: '', link: 'chrono' },
    { name: 'Minuteur', background: '' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
