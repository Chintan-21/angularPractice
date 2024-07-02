import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './components/child1/child1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Practice';
  childMessage: string = 'This is from parent';
  x!: string;
  y!: string;

  @ViewChild(Child1Component) pMsg = '';

  constructor() {
    console.log(this.pMsg);
  }

  ngAfterViewInit() {
    console.log(this.pMsg);
    this.x = (this.pMsg as any).parentMessage;
    // console.log(this.x);
  }

  recieveMessage($event: any) {
    // console.log($event);
    this.y = $event;
  }
}
