import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
