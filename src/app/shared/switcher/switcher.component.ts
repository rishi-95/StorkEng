import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  isVisible: boolean;

  /**
   * Set the theme color as selected
   * @param theme specify the color
   */
  setTheme(theme: string) {
    document
      .getElementById('color-opt')
      .setAttribute('href', './assets/css/colors/' + theme + '.css');
  }

  /**
   * Toogle switcher
   */
  ToogleMenu() {
    this.isVisible = !this.isVisible;
  }
  constructor() {
  }

  ngOnInit() {
  }

}
