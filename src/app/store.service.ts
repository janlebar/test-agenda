import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, afterNextRender, computed, effect, signal } from '@angular/core';

export type Bucket = {
  id: number;
  name: string;
  location: string;
  files: string[];
};

type State = {
  lastBucketID: number; 
  buckets: Bucket[];
};

const initalState: State = {
  lastBucketID: 0,
  buckets: [],
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state = signal<State>(initalState);

  readonly buckets = computed(() => this.state().buckets);

  constructor() {
      //const localStorage = document.defaultView?.localStorage!;

    let localState = localStorage?.getItem("state");

    if (localState) {
      this.state.set(JSON.parse(localState));
    }

    effect(() => {
      console.log("state",  this.state());
      let state = this.state();
      localStorage?.setItem("state", JSON.stringify(state));
    })
  }

  getBucket(id: number) {
    return computed(() => {
      let bucket = this.state().buckets.find((bucket) => bucket.id == id);
      return bucket!;
    });
  }

  createBucket(bucket: Bucket) {
    this.state.update((oldState) => {
      bucket.id = oldState.lastBucketID;

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
        buckets: oldState.buckets.filter((bucket) => bucket.id !== id),
      };
      return newState;
    });
  }

  createFile(bucketId: number, fileName: string) {
    this.state.update((oldState) => {
      // bucket we want to add file to
      let bucket = oldState.buckets.find((bucket) => bucket.id == bucketId);
      bucket?.files?.push(fileName);

      console.log(bucket?.files);

      return {...oldState};
    })
  }

  deleteFile(bucketId: number, fileName: string) {
    this.state.update((oldState) => {
      const bucket = oldState.buckets.find((bucket) => bucket.id === bucketId);
      if (bucket) {
        bucket.files = bucket.files.filter((file) => file !== fileName);
      }
      return { ...oldState };
    });
  }
  
}

