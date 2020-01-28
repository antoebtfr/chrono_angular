import { AnimationService } from './../../shared/animation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  constructor(private animFunc: AnimationService) { }

  ngOnInit() {
    this.animFunc.disappeared('name', 4);
  }
}
