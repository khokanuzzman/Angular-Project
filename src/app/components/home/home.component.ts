import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { Mydata } from '../../models/mydata';
import { map } from 'rxjs/operators';
import { database } from 'firebase';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  showFiller = false;
  data:Mydata[];
  menu1=false;
  menu2=false;
  searchText;
  filterData= this.data;
  detailState:boolean=false;
  public dtoDetails : Mydata[];
  constructor(public fireStore:AngularFirestore, public firebaseService: FirebaseService,private _bottomSheet: MatBottomSheet) {
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.filterData, event.previousIndex, event.currentIndex);
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomsheetComponent);
  }

}
