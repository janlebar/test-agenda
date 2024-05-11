import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-bucket-detail',
  templateUrl: './bucket-detail.component.html',
  styleUrls: ['./bucket-detail.component.css']
})
export class BucketDetailComponent {
  bucketId: number;
  bucket: any; // Define the bucket property to hold the bucket data

  constructor(private route: ActivatedRoute, private store: StoreService) {
    this.bucketId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.bucket = this.store.state().buckets.find(bucket => bucket.id === this.bucketId);
  }
}