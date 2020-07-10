import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), 
                                   Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]),
    mobile: new FormControl('',[Validators.required, Validators.minLength(10), 
                                Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), 
                                  Validators.maxLength(15)])
  });

  get name() { return this.SignupForm.get('name'); }
  get mobile() { return this.SignupForm.get('mobile'); }
  get password() { return this.SignupForm.get('password'); }


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    alert("Welcome,to our family.You have Successfully Sign-UP...! Please Sign-in ");
    this.router.navigate(['sign-in']);
  }
  
  onReset(){
    this.SignupForm.reset();
  }

}
