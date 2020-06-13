import { Component } from '@angular/core';

import { AngularFireDatabase ,AngularFireList,} from '@angular/fire/database';

import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  itemArray = []

  itemList: AngularFireList<any>
  
   
  
    data = {
        id:'',
        name:'',
        skill:'',
        phon:'',
        email:'',

    }
 //   public value

    myUid:any
    userKey:any

  constructor(public db: AngularFireDatabase ,
    private router: Router,
   public afAuth:AngularFireAuth,
    ) {


    
      this.itemList = db.list('user');
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
          this.data.phon = value['phon'] ;
          this.data.email = value['email'] ;
        }
       
        
      }
    }
    
  
  
    onEdit( $key ){
   
      this.data.name 
      this.data.skill
      this.data.phon 
      this.data.email

      this.itemList.update($key , {
        name : this.data.name ,
        skill :  this.data.skill ,
        phon : this.data.phon ,
        email :  this.data.email ,
      })
    
this.itemArray =[]
  
     
    }
 


    
    
  
    myskill(){
      this.router.navigate(['/myskill']);
      console.log('myskill') 
      }


      out(){

          this.afAuth.auth.signOut();
        
      
          this.router.navigate(['/start'])
        

        console.log('تسجيل خروج') 

      }





    
    
      }
     
    
    
    
    
    

    



export class ListItemClass{
  $key: string;
  name : string;
  skill:string;
  phon :  string;
  email:string;

}
