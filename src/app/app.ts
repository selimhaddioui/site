import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CURRENT_YEAR, GITHUB, LINKEDIN, MAIL, PHONE, TITLE} from './data/me';

@Component({
  selector: 'sh-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = TITLE;
  protected mail = MAIL;
  protected github = GITHUB;
  protected linkedin = LINKEDIN;
  protected phone = PHONE;
  protected currentYear = CURRENT_YEAR;
}
