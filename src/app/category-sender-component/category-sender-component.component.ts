import { Component, OnInit } from '@angular/core';
import { Category, Categories } from '../model/category.model';
import { CommunicationService } from '../service/communication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-sender-component',
  templateUrl: './category-sender-component.component.html',
  styleUrls: ['./category-sender-component.component.css']
})
export class CategorySenderComponentComponent implements OnInit {

  cat: Category;
  cats = Categories;
  c1; c2; c3; c4; c5; c6; c7; c8;
 
  constructor(private communicationService: CommunicationService) { 
    this.cat = new Category(0, " ");
    this.c1 = this.cats[0];
    this.c2 = this.cats[1];
    this.c3 = this.cats[2];
    this.c4 = this.cats[3];
    this.c5 = this.cats[4];
    this.c6 = this.cats[5];
    this.c7 = this.cats[6];
    this.c8 = this.cats[7];
  }

  ngOnInit(): void {
  }

  getSelectedCategory(c: Category): void{
    this.cat = c;
    this.communicationService.categorySender(this.cat.catId);
  }
}
