import { Component } from "@angular/core";
import { RecipeService } from "./recipe.service";
export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.getRecipes();
  }
}
