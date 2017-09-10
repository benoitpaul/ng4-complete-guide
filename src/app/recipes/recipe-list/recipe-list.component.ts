import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
