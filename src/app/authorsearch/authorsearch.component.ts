import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-authorsearch',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './authorsearch.component.html',
  styleUrl: './authorsearch.component.scss'
})
export class AuthorsearchComponent {

}
