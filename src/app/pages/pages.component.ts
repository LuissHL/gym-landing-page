import { Component } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [MenuBarComponent, MainContentComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
