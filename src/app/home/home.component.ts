import { Component } from '@angular/core';
import {BucketListComponent} from '../bucket-list/bucket-list.component';
import {MainnavigationComponent} from '../mainnavigation/mainnavigation.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BucketListComponent, MainnavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
