import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from '../service/track.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {

  total: string = "";
  total_String: string = '';
  status: Boolean = false;

  cardForm = new FormGroup({
    'name': new FormControl('',
                          [Validators.required,
                          Validators.minLength(4),
                          Validators.maxLength(15),
                          Validators.pattern('[a-z A-z]*') ]),
    'cardNumber': new FormControl('',
                          [Validators.required,
                          Validators.minLength(19),
                          Validators.maxLength(19),
                          Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}') ]),
    date: new FormControl('',
                            [Validators.required,
                              Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/) ]),
    code: new FormControl('',
                          [Validators.required,
                          Validators.minLength(3),
                          Validators.maxLength(3),
                          Validators.pattern('[0-9]*') ])
  });

    
  get name() { return this.cardForm.get('name'); }
  get cardNumber() { return this.cardForm.get('cardNumber'); }
  get date() { return this.cardForm.get('date'); }
  get code() { return this.cardForm.get('code'); }
  
  constructor(public actRoute: ActivatedRoute, public track: Track, public router: Router) {
    this.total_String = actRoute.snapshot.params.total;
    this.total = this.total_String 
  }

  ngOnInit(): void {
  }

  gateway(c){
    if(c){ //payment done
      var a = parseInt(this.total)
      if(a>0){
        this.status = true;
      }
    }
    console.log(this.status);
    this.track.gateway_Status(this.status);
    alert("Payment sucessfully Done.")
    this.total = "0";
    //return this.status;
  }

  onFormSubmit(){
    // console.log(this.cardForm.value);
    alert("Thank You For Shopping With Us...")
    this.total = "";
    this.router.navigate(['track-order']);
  }

  onReset(){
    this.cardForm.reset();
  }

}
