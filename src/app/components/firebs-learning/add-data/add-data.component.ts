import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Mydata } from 'src/app/models/mydata';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    assignTo:new FormControl(null, Validators.required)
  });

  Status: any = ['Inprogress', 'Deployed', 'Done', 'Test In progress', 'Test Done'];
  assignList: any = ['Jahangir Alam', 'Ashraf Hasan', 'Zeeshan Adnan', 'Atequer', 'Shantanu Borua','Mehedi Hasan'];

  data: Mydata = {
    title: '',
    description: '',
    status: '',
    assignTo:''
  }
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.data.title != '' && this.data.description != '' && this.data.status != '' &&this.data.assignTo !='') {
      this.markFormGroupAsTouched(this.form);
      this.markFormGroupAsUnTouched(this.form);
      
      this.firebaseService.addData(this.form.value);
      this.data.title = '';
      this.data.description = '';
      this.data.assignTo ='';
    }
  }

  protected markFormGroupAsTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsDirty();
      if (control.controls) {
        control.controls.forEach(ctrl => this.markFormGroupAsTouched(ctrl));
      }
    });
  }

  protected markFormGroupAsUnTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsPristine();
      if (control.controls) {
        control.controls.forEach(ctrl => this.markFormGroupAsUnTouched(ctrl));
      }
    })
  }
}
