import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Mydata } from './models/mydata';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Crud';
  items: Observable<Mydata[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    $( document ).ready(function() {
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
  });
  }
}
