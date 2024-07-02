import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
})
export class Child1Component {
  bool: boolean = true;
  parentMessage: string = 'Message from child';
  outputChildMessage: string = 'Message from child via OUTPUT';
  imgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0N5oKYW3RlzwHqVtRT5bGDr7L1UX5ezDszg&usqp=CAU';

  @Input() cMsg: string = '';

  @Output() outMsg = new EventEmitter<string>();

  sendMessage() {
    // console.log('clicked');
    this.outMsg.emit(this.outputChildMessage);
  }
}
