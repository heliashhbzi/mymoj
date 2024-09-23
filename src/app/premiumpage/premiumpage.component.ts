import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-premiumpage',
  standalone: true,
  imports: [RouterModule , RouterOutlet],
  templateUrl: './premiumpage.component.html',
  styleUrl: './premiumpage.component.scss'
})
export class PremiumpageComponent {
  constructor(private router : Router){

  }

}
