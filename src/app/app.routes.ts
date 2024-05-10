import { Routes } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { CloudStorageComponent } from './cloudstorage/cloudstorage.component';

export const routes: Routes = [
    {path: 'bucketlist', component: BucketListComponent},
    {path: 'cloudstorage', component: CloudStorageComponent},

];
