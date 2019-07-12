import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators }from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  form=new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }



  contactMethod = [
    {
      id: 1,
      name: 'email'
    },
    {
      id: 2,
      name: 'phone'
    }
  ]

  log(x, y) {
    console.log(x.value);
    console.log(y.value);

  }
  submit(f) {
    let fn = f.firstname.value;
    fn = "";
    console.log(f);

  }

}
