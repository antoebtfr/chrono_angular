import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  disappeared(element, delay?) {
    if (delay) {
      setTimeout(() => {
        document.getElementById(element).style.display = 'none';
      }, delay * 1000);
    } else {
        document.getElementById(element).style.display = 'none';
    }
  }

}
