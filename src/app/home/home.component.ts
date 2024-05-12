import { Component } from '@angular/core';
import {BucketListComponent} from '../bucket-list/bucket-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BucketListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
