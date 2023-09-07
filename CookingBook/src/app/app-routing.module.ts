import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes:Routes =
[{path:"",component:HomeComponent}, 
{path:"recipe",component:RecipeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
  
})
export class AppRoutingModule { }
