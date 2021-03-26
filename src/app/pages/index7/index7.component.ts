import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index7',
  templateUrl: './index7.component.html',
  styleUrls: ['./index7.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #000000;
    color: white;
    background: none;
    border: none;
  }
  .dark-modal .modal-header {
    border : none
  }
  .dark-modal .close {
    color: white;
  }
`]
})
export class Index7Component implements OnInit {

  currentSection = 'home';
  constructor(private modalService: NgbModal) { }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#272a33';
      navbar.style.padding = '10px';
    } else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  ngOnInit() {
    let i = 1;
    setInterval(() => {
      // tslint:disable-next-line: max-line-length
      if (i === 1) { document.getElementById('text').innerHTML = 'We help startups launch their products'; } else if (i === 2) { document.getElementById('text').innerHTML = 'Perfect solution for small businesses'; } else { document.getElementById('text').innerHTML = 'We love make things amazing and simple'; }
      if (i >= 3) { i = 0; }
      i++;
    }, 2500);
  }

  /**
   * Open modal for show video
   * @param content content of video
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
  }
}
