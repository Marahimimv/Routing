import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  template: `
  <h1>Routing</h1>
  <a href="/c1">C1 Component</a> ||
  <a routerLink="/c2">C2 Component</a> ||
  <a routerLink="/c3">C3 Component</a>
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Routing';

}
