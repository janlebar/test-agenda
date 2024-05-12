import { Component, Inject, afterNextRender, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CloudStorageComponent } from './cloudstorage/cloudstorage.component';
import { DOCUMENT } from '@angular/common';
import { StoreService } from './store.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CloudStorageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';

  currentId = 0;
  buckets: {id: number; name: string}[] = [];

  addBucket(name: string) {
    this.buckets.push({id: this.currentId, name: name});
    this.currentId += 1;
  }

  // constructor(@Inject(DOCUMENT) private document: Document, private store: StoreService) {
  //   afterNextRender(() => {
  //     const localStorage = document.defaultView?.localStorage!;

  //     let localState = localStorage.getItem("state");

  //     if (localState) {
  //       store.state.set(JSON.parse(localState));
  //     }
  //   });

  //   effect(() => {
  //     console.log("state",  store.state());
  //     const localStorage = document.defaultView?.localStorage!;
  //     if (!localStorage) return;

  //     let state = store.state();
  //     localStorage.setItem("state", JSON.stringify(state));
  //   })
  // }
}
