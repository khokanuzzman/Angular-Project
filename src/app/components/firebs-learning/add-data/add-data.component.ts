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
  form=new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required)
  });

  Status: any = ['Inprogress', 'Deployed', 'Done', 'Test In progress','Test Done'];
  
  data:Mydata={
    title:'',
    description:'',
    status:''
  }
  constructor(public firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.data.title!='' && this.data.description!='' && this.data.status!=''){
      this.firebaseService.addData(this.form.value);
      this.data.title='';
      this.data.description='';
    }else{
      alert('NO DATA');
    }
  }

}
