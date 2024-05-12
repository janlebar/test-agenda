import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

type Bucket = {
  id: number;
  name: string;
  location: string;
};

type State = {
  lastBucketID: number; 
  buckets: Bucket[];
};

const initalState: State = {
  lastBucketID: 0,
  buckets: []
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  localStorage = inject(DOCUMENT).defaultView?.localStorage!;

  state = signal<State>(initalState);

  readonly buckets = computed(() => this.state().buckets);

  constructor() {
    let localState = this.localStorage.getItem("state");

    if (localState) {
      this.state.set(JSON.parse(localState));
    }

    effect(() => {
      let state = this.state();
      this.localStorage.setItem("state", JSON.stringify(state));
    })
  }

  createBucket(bucket: Bucket) {
    this.state.update((oldState) => {
      let newState: State = {
        lastBucketID: oldState.lastBucketID + 1,
        buckets: [bucket]
      };

      newState.buckets.push(...oldState.buckets);

      return newState;
    })
  }


  deleteBucket(id: number) {
    console.log(id+"tuki")
    this.state.update((oldState) => {
      const newState: State = {
       ...oldState,
        buckets: oldState.buckets.filter((bucket) => bucket.id!== id),
      };
      return newState;
    });
  }

}

