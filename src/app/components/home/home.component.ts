import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { Mydata } from '../../models/mydata';
import { map } from 'rxjs/operators';
import { database } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Mydata[];
  menu1=false;
  menu2=false;
  searchText;
  filterData= this.data;
  detailState:boolean=false;
  layout_one:boolean=true;
  layout_two:boolean=false;
  layout_three:boolean=false;

  public dtoDetails : Mydata[];
  constructor(public fireStore:AngularFirestore, public firebaseService: FirebaseService) {
    this.fireStore.collection('bugfix').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Mydata;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe( data => {
      this.filterData = data;
    });
   }

  ngOnInit() {
  }

  detailsData(event,d:Mydata[]){
    this.dtoDetails = d;
    this.detailState=true;
    console.log(this.dtoDetails);
  }

  dataChanged(value){
      this.filterData = this.data.filter(d=>{
        d.status===value;
      });
  }

  layoutOne(){
    this.layout_one=true;
    this.layout_two=false;
    this.layout_three=false;
  }
  layoutTwo(){
    this.layout_two=true;
    this.layout_one=false;
    this.layout_three=false;
  }
  layoutThree(){

  }

}
