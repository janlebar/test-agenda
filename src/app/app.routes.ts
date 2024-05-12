

import { Routes } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { CloudStorageComponent } from './cloudstorage/cloudstorage.component';
import { BucketDetailComponent } from './bucket-detail/bucket-detail.component'; // Import the BucketDetailComponent
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: 'bucketlist', component: BucketListComponent },
    { path: 'cloudstorage', component: CloudStorageComponent },
    { path: 'bucket/:id', component: BucketDetailComponent }, // Define a route for bucket detail component
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

