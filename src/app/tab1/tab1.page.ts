import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


import { AngularFireAuth } from 'angularfire2/auth';

 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  email:string = '';
  uid:any;
  itemList: AngularFireList<any>
  

  data ={
    
    name: '',
    skill:'',
    link:'',
    phon:'',
    email:'',
    nots:'',
    uid:'',
  };

  constructor(private fire:AngularFireAuth ,public db:AngularFireDatabase , public router:Router) {

    this.itemList = db.list('card')

    let user =  localStorage.getItem('email')
    this.email = user
    console.log( user)
    console.log( '-----------------------')

    this.uid =  localStorage.getItem('uid')
    console.log( 'uid: '+ this.uid)

    



}
   insertSkill(){
    
 
    this.fire.authState.subscribe(auth=>{
      if(auth){
        localStorage.setItem('uid',auth.uid )
    this.itemList.push({
      name : this.data.name ,
      skill :  this.data.skill ,
      link : this.data.link ,
      phon :  this.data.phon ,
      nots :  this.data.nots ,
      email: this.data.email ,
      uid : auth.uid,
    })

    this.router.navigate(['/myskill'])  }

})
}

}
