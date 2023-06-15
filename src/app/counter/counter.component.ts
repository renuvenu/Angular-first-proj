import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  like: number = 0
  disLike: number = 0

  increment() {
    this.like++;
  }

  decrement() {
    this.disLike++;
  }
}
