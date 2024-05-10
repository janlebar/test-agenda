import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-bucket-list',
  standalone: true,
  imports: [AlertModule, RouterLink, CommonModule],
  templateUrl: './bucket-list.component.html',
  styleUrl: './bucket-list.component.css'
})


export class BucketListComponent {
  buckets: {id: number; name: string; }[] = [
    { id: 1, name: 'Bucket 1' },
    { id: 2, name: 'Bucket 2' },
    { id: 3, name: 'Bucket 3' },
    { id: 4, name: 'Bucket 4' },
    { id: 5, name: 'Bucket 5' }
  ];
}