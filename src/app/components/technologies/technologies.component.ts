import { Component, OnInit } from '@angular/core';
import { faHome, faHandsAslInterpreting, faFlagUsa } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  faHome = faHome;
  faHandsAslInterpreting = faHandsAslInterpreting;
  faFlagUsa = faFlagUsa;
  constructor() { }

  ngOnInit(): void {
  }

}
