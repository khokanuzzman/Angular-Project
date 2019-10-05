import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Mydata } from './models/mydata';
import { AuthenticationService } from './services/authentication.service';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BugFix';
  items: Observable<Mydata[]>;
  constructor(db: AngularFirestore, public  authService:  AuthenticationService) {
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
