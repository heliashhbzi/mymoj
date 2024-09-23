import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-collectionlist',
  standalone: true,
  imports: [RouterModule , RouterLink],
  templateUrl: './collectionlist.component.html',
  styleUrl: './collectionlist.component.scss'
})
export class CollectionlistComponent {

}
