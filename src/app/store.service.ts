import { Injectable, computed, signal } from '@angular/core';

type Bucket = {
  id: number;
  name: string;
};

type State = {
  buckets: Bucket[];
};

const initalState: State = {
  buckets: [
    {id: 1, name: "test"},
  ]
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state = signal<State>(initalState);

  readonly buckets = computed(() => this.state);
}
