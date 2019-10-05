import { Component, OnInit, HostListener } from '@angular/core';
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
  progresValue:number;
 rangeArray:number[];
  title = 'BugFix';
  items: Observable<Mydata[]>;
  constructor(db: AngularFirestore, public  authService:  AuthenticationService) {
    this.items = db.collection('items').valueChanges();
    this.progresValue =0;
  this.rangeArray= new Array(100);
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
   var element = document.documentElement, 
   body = document.body,
   scrollTop = 'scrollTop',
   scrollHeight = 'scrollHeight';
   this.progresValue = 
   (element[scrollTop]||body[scrollTop]) / 
   ((element[scrollHeight]||body[scrollHeight]) - element.clientHeight) * 100;
  }
  ngOnInit() {
    $( document ).ready(function() {
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
  });
  }
}
