import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Mydata } from '../models/mydata';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  datas: Observable<Mydata[]>;
  dataDoc: AngularFirestoreDocument<Mydata>;
  dataCollection: AngularFirestoreCollection<Mydata>;
  test: any[] = [];
  constructor(public db: AngularFirestore) {
    this.dataCollection = db.collection<Mydata>('bugfix');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    // this.datas= db.collection('bugfix').valueChanges();
    this.dataCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Mydata;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(data => {
      this.test = data
    });
  }

  getMydata() {
    return this.test;
  }

  addData(data: Mydata) {
    this.dataCollection.add(data);
  }

  deleteData(data: Mydata) {
    this.dataDoc = this.db.doc(`bugfix/${data.id}`);
    this.dataDoc.delete();
  }
  
  updateData(data:Mydata){
    this.dataDoc = this.db.doc(`bugfix/${data.id}`);
    this.dataDoc.update(data);
  }
}
