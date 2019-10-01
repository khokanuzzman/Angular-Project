import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Mydata } from '../models/mydata';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;
  data: Observable<Mydata[]>;
  constructor(public afAuth: AngularFireAuth, db: AngularFirestore, public router: Router) {
    this.data = db.collection('bugfix').valueChanges();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async  login(email: string, password: string) {

    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['/home']);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }


  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  signup(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
  }
