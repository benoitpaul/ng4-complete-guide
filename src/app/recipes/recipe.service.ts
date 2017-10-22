import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'this is a test',
            'http://maxpixel.freegreatpicture.com/static/photo/2x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'Another recipe',
            'this is another test',
            'http://maxpixel.freegreatpicture.com/static/photo/2x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);

    }

}