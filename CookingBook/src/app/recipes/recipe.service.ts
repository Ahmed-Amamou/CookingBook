import { Injectable } from "@angular/core";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}
@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
      instructions: "...",
    },
    {
      id: 2,
      name: "Chicken Alfredo",
      ingredients: ["Chicken", "Fettuccine", "Alfredo Sauce"],
      instructions: "...",
    },
    {
      id: 3,
      name: "Chakchouka",
      ingredients: ["Chicken", "3tham", "Alfredo Sauce"],
      instructions: "...",
    },
    // Add more recipes here
  ];
  getRecipes(): Recipe[] {
    return this.recipes;
  }
  constructor() {}
}
