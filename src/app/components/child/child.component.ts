import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent= new EventEmitter();
  @Output() public childInputData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  eventFire(){
    this.childEvent.emit('Hey this info sent from child.!');
  }
  childData(value){
    this.childInputData.emit(value);
  }

}
