import { Component } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [DescriptionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
