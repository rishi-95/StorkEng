import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index4',
  templateUrl: './index4.component.html',
  styleUrls: ['./index4.component.css']
})
export class Index4Component implements OnInit {

  currentSection = 'home';

  /**
   * Onclick section fetch
   * @param section fetch the section
   */
  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
  constructor() { }

  ngOnInit() {
  }

}
