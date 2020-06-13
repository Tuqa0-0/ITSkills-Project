import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private router: Router) { }

  goToLogin(){
this.router.navigate(['/login']);
console.log('Login') 
}

   goToRegister(){
 this.router.navigate(['/register']);
console.log('Register') 
}

   goToAbout(){
this.router.navigate(['/about']);
console.log('About') 
}
    



  ngOnInit() {
  }

}
