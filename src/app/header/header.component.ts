import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  username: String = "";
  

  constructor(public actRoute: ActivatedRoute) { 
    this.username = actRoute.snapshot.params.username;
    console.log(this.username)
  }

  ngOnInit(): void {
  }

}
