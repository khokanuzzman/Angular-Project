import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x,y){
    console.log(x.value);
    console.log(y.value);

  }
  submit(f){
    let fn = f.firstname.value;
    fn = "";
    console.log(f);

  }

}
