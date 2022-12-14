import { Component, OnInit } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faCoffee = faCoffee;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }
 

  toggleClass() {
    if(this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}

