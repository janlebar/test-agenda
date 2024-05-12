import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService, Bucket } from '../store.service';


@Component({
  selector: 'app-bucket-detail',
  templateUrl: './bucket-detail.component.html',
  styleUrls: ['./bucket-detail.component.css']
})
export class BucketDetailComponent {
  constructor(private route: ActivatedRoute, public store: StoreService) {
  }

  bucketId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
  bucketSignal = this.store.getBucket(this.bucketId);

  onFileSelected(event: any) {
    // Access the selected file here, you can use 'event.target.files' array
    const file: File = event.target.files[0];
    // Handle the file, you may want to upload it or perform other actions
    console.log('Selected file:', file);

    this.store.createFile(this.bucketId, file.name);
  }
}
