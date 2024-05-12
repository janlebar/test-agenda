import { Component, Input, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common'; 
import { StoreService } from '../store.service';

@Component({
  selector: 'app-bucket-list',
  standalone: true,
  imports: [AlertModule, RouterLink, CommonModule],
  templateUrl: './bucket-list.component.html',
  styleUrl: './bucket-list.component.css',
})
export class BucketListComponent {
  store: StoreService = inject(StoreService);

  deleteBucket(id: number) {
    this.store.deleteBucket(id);
  }
}




