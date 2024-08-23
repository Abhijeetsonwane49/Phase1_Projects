import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './Header.component.html',
  styleUrl: './Header.component.css'
})
export class HeaderComponent {
  title = 'Practice_App';

}
