import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, throttle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  timer = new BehaviorSubject<number>(0);

  ngOnInit() {
    this.timer
      .pipe(throttle((val) => interval(2000)))
      .subscribe((timePassed) => {
        console.log(timePassed);
      });

    setInterval(() => {
      let newValue = this.timer.value + 1000;
      this.timer.next(newValue);
    }, 100);
  }
}
