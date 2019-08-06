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

  status: any = ['Inprogress', 'Deployed', 'Done', 'Test In progress', 'Test Done'];
  
  data:Mydata[];
  constructor(public fireStore:AngularFirestore, public firebaseService: FirebaseService) { 
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
  ngOnInit() {
    
  }


  editForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    editStatus: new FormControl(null, Validators.required)
  });


  editData(event,d:Mydata){
    this.editState=true;
    this.dtoEdit = d;
    console.log(this.dtoEdit);
  }

  deleteData(event,d:Mydata){
    this.firebaseService.deleteData(d);

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
