import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Mydata } from 'src/app/models/mydata';
declare let $: any;

@Component({
  selector: 'app-firebs-learning',
  templateUrl: './firebs-learning.component.html',
  styleUrls: ['./firebs-learning.component.css']
})
export class FirebsLearningComponent implements OnInit {
  success = false;
  editState: boolean = false;
  dtoEdit : Mydata;
  
  data:Mydata[];
  constructor(public firebaseService:FirebaseService) { 
  }

  ngOnInit() {
    this.firebaseService.getMydata().subscribe(data=>{
      this.data = data;
    })
  }

  editData(event,data:Mydata){
    this.editState=true;
    this.dtoEdit = data;
  }

  deleteData(event,data:Mydata){
    this.firebaseService.deleteData(data);

  }

  updateData(data:Mydata){
    this.firebaseService.updateData(data);
    if(this.updateData){
      $( document ).ready(function() {
        $('.toast').toast('show');
        });
    } 
    this.success=true;
    this.editState=false;
  }
  close(){
    this.editState=false;
  }

}
