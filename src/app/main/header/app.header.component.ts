import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './app.header.component.html',
    standalone:true,
    imports: [CommonModule]
})
export class AppHeaderComponent implements OnInit, OnDestroy {
   currentTime: Date = new Date();
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // update every second
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}