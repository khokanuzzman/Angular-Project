import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public msg="";
  public message ="";
  constructor() { }

  ngOnInit() {
  }

  changeData(value)
  {
    this.msg=value;
  }

}
