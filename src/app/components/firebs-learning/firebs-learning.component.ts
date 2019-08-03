import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Mydata } from 'src/app/models/mydata';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  constructor(public fireStore:AngularFirestore, public firebaseService: FirebaseService) { 
  }
  ngOnInit() {
    this.fireStore.collection('bugfix').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Mydata;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe( data => {
      this.data = data;
    });
  }


  editForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required)
  });


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
