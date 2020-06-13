import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';

import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.page.html',
  styleUrls: ['./myskill.page.scss'],
})
export class MyskillPage implements OnInit {



  itemArray = []

  itemList: AngularFireList<any>
  
   
  email:string;
  myid:string;
  
    data = {
        id:'',
        name:'',
        skill:'',
        link:'',
        phon:'',
        nots:'',
        email:''
    }
  
    myUid:any
    userKey:any


  constructor(public db: AngularFireDatabase ,
    private router: Router,
    afAuth:AngularFireAuth,
    ) {




    
      this.itemList = db.list('card');
      this.itemList.snapshotChanges()
      .subscribe(actions=>{
            actions.forEach(action=>{
              let y = action.payload.toJSON()
              y["$key"] = action.key
              this.itemArray.push(y as ListItemClass)
    
  })
      })
  
  this.myUid =  localStorage.getItem('uid')
      console.log(this.itemArray)
  
  
     }
  
  

     editForm( $key){

      for (let value of  this.itemArray) {
        if (value['$key'] == $key) {
          console.log(value['$key'])
          this.data.name = value['name'] ;
          this.data.skill = value['skill'] ;
          this.data.link = value['link'] ;
          this.data.phon = value['phon'] ;
          this.data.nots = value['nots'] ;
        }
       
        
      }
    }
    
  
  
    onEdit( $key ){
   
      this.data.name 
      this.data.skill
      this.data.link  
      this.data.phon 
      this.data.nots  
  
      this.itemList.update($key , {
        name : this.data.name ,
        skill :  this.data.skill ,
        link :  this.data.link ,
        phon : this.data.phon ,
        nots :  this.data.nots ,
      })
    
this.itemArray =[]
  
     
    }
 

    onDelete( $key){
      this.itemList.remove($key);
      this.itemArray = []
    }

    
  

    

 ngOnInit() {
  }

}


export class ListItemClass{
  $key: string;
  name : string;
  skill:string;
  link:string;
  phon :  string;
  nots :  string;
  email:string;

}
