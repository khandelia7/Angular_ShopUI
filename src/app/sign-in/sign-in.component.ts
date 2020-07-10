import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), 
                                   Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), 
                                  Validators.maxLength(15)])
  });

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  constructor(public router: Router) { }
  
  ngOnInit(): void {
  }
  
  onFormSubmit() {
    console.log()
    alert("You have Successfully Sign-IN...! Let's Shop");
    this.router.navigate(['home/' , this.username.value]);
    
  }

  onReset(){
    this.loginForm.reset();
  }
  onSignUP(){
    alert("Re-Directing To SIGN-UP Page");
    this.router.navigate(['sign-up'])
  }
 
}
