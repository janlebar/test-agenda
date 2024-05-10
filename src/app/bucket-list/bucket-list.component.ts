import { Component } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-bucket-list',
  standalone: true,
  imports: [AlertModule],
  templateUrl: './bucket-list.component.html',
  styleUrl: './bucket-list.component.css'
})
export class BucketListComponent {

}
