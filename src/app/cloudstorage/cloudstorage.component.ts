

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
    location: '',
  };


  onSubmit() {
    console.log(this.user);
    // Add the new bucket to the list
  

    this.store.createBucket({id: 0, name: this.user.name, location: this.user.location, files: []});
  }
}




