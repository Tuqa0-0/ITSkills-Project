import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DataService} from '../data.service';


import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  email:string = '';
  uid:any;
  itemList: AngularFireList<any>
  
  
  data ={
    
    name: '',
    skill:'',
    phon:'',
    email:'',
    password:'',
    uidd:'',
  };
  

  constructor(public dataService: DataService,private fire:AngularFireAuth ,public db:AngularFireDatabase , public router:Router) {


    this.itemList = db.list('user')

    let user =  localStorage.getItem('email')
    this.email = user
    console.log( user)
    console.log( '-----------------------')

    this.uid =  localStorage.getItem('uid')
    console.log( 'uid: '+ this.uid)

    this.fire.authState.subscribe(auth=>{
      if(auth){
        localStorage.setItem('uid',auth.uid )
        this.itemList.push({
        name : this.data.name ,
        skill :  this.data.skill ,
         phon :  this.data.phon ,
         email: this.data.email ,
         uid :auth.uid

})

      }
    })
   }


  ngOnInit() {
  }


  register(){


    let credentials = {
      email: this.data.email,
      password: this.data.password
          }
      


      this.dataService.signUpWithEmail(credentials).then(

        ()=> this.router.navigateByUrl('tabs/tab1'),
        error => console.log('error')
      )


  }

 
goToLogin(){
  this.router.navigate(['/login'])
}


}
