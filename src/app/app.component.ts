import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Portfolio d'Anthony Pfeifer";

  faHome = faHome;
}
