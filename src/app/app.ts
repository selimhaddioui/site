import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Sélim Haddioui | Software Engineer';
  protected mail = 'to-find-a-clever-way-to-store-it';
  protected github = 'selimhaddioui';
  protected linkedin = 'shaddioui';
  protected phone = 'to-find-a-clever-way-to-store-it';
  protected currentYear = new Date().getFullYear();
}
