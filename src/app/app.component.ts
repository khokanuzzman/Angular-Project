import { Component, OnInit, HostListener } from '@angular/core';
import { firestore, User } from 'firebase';
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
  user: Observable<firebase.User>;
  userName: string;
  items: Observable<Mydata[]>;
  constructor(db: AngularFirestore, public  authService:  AuthenticationService) {
    this.user = authService.afAuth.authState;
    this.items = db.collection('items').valueChanges();
    this.user.subscribe((user: firebase.User) => {
      if (user !== null) {
        this.userName = user.email;
        console.log(this.userName);
      }
    });
  }

  ngOnInit() {
    $( document ).ready(function() {
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
  });
  }
}
