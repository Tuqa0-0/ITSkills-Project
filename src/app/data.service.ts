import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';

import { Data } from './model/data';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private skills = this.db.list<Data>('card')

  private user : firebase.User

  constructor(public db:AngularFireDatabase,public afAuth:AngularFireAuth,private router: Router) { 
     afAuth.authState.subscribe(user => {
    this.user = user
  })


  

}



signInWithEmail(credentials: { email: any; password: any; }){
  console.log('sign in with email')
  return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
}


signUpWithEmail(credentials: { email: any; password: any; }){
  console.log('register   with email')
  return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
}


  add(data:Data){
    return this.skills.push(data)

  }

   deletecard(data){
    return this.skills.remove(data )
  }


     


}
