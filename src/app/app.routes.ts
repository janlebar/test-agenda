import { Routes } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { CloudStorageComponent } from './cloudstorage/cloudstorage.component';

export const routes: Routes = [
    {path: 'bucketlist', component: BucketListComponent},
    {path: 'cloudstorage', component: CloudStorageComponent},

];



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { BucketListComponent } from './bucket-list/bucket-list.component';
// import { CloudStorageComponent } from './cloudstorage/cloudstorage.component';
// import { BucketDetailComponent } from './bucket-detail.component'; // Import the component for bucket detail page

// const routes: Routes = [
//     { path: 'bucketlist', component: BucketListComponent },
//     { path: 'cloudstorage', component: CloudStorageComponent },
//     { path: 'bucket/:id', component: BucketDetailComponent } // Define route parameter for bucket ID
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }