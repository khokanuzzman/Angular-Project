import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { Mydata } from '../../models/mydata';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Mydata[];
  menu1=false;
  menu2=false;
  public dtoDetails : Mydata;
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

  detailsData(event,d:Mydata){
    this.dtoDetails = d;
    console.log(this.dtoDetails);
  }

}
