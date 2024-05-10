

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../store.service';

@Component({
  selector: 'cloudstorage',
  templateUrl: './cloudstorage.component.html',
  styleUrls: ['./cloudstorage.component.css'],
  imports: [ FormsModule],
  standalone: true,
})
export class CloudStorageComponent {
  constructor(public store: StoreService) {}
  
  user = {
    name: '',
    location: '' 
  };

  buckets = [
    { name: 'Bucket 1', location: 'Kranj' },
    { name: 'Bucket 2', location: 'Ljubljana' },
    { name: 'Bucket 3', location: 'Kranj' },
    //...
  ];

  onSubmit() {
    console.log(this.user);
    // Add the new bucket to the list
    this.buckets.push({ name: this.user.name, location: this.user.location });

    this.store.createBucket({id: 10, name: this.user.name});
  }
}




