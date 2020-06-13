import { Component } from '@angular/core';


import { AngularFireDatabase,AngularFireObject} from '@angular/fire/database';
import { Data } from '../model/data';

import { Router } from '@angular/router';
import { DataService} from '../data.service';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  skillcard:AngularFireObject<Data>;
  data: Data = {
    name: '',
    skill:'',
    link:'',
    phon:'',
    email:'',
    nots:''
  
  };
 

  itemArray=[];
  myObject = []


  constructor(public db: AngularFireDatabase ,
    public dataService: DataService,private router: Router,
    afAuth:AngularFireAuth) {


      
 this.skillcard = db.object('card');
      this.skillcard.snapshotChanges().subscribe(action => {
       
       if (action.payload.val() == null  || action.payload.val() == undefined ) {
         console.log('no data' )
        }

        else {

        this.itemArray.push(action.payload.val() )
        this.myObject =Object.entries(this.itemArray[0])
   
        }
      
       });
    
      
  }
 

}
