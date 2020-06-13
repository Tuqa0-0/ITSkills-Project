import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { DataService} from '../data.service';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  email:string = '';
  password:string = '';
 
  

  data ={
    
    name: '',
    skill:'',
    phon:'',
    email:'',
    password:'',
    uid:'',
  };
  
    constructor(public dataService: DataService,public db:AngularFireDatabase ,private fire:AngularFireAuth , private router: Router) {

     }
  
  
  
    


  ngOnInit() {
  }



  login(){

    let credentials = {
      email: this.data.email,
      password: this.data.password
          }
      
      this.dataService.signInWithEmail(credentials).then(
        ()=> this.router.navigateByUrl('tabs/tab1'),
        error => console.log('error')
      )
      
  }

  
  




goToRegister(){
  this.router.navigate(['/register'])
}


}
