import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule ,RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
