import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/service/recipe-service.service';
import { Recept } from 'src/app/model/Recept';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html'
})
export class ListRecipeComponent implements OnInit {

  allRecipes:Recept[];

  constructor(private service:RecipeServiceService) { }

  ngOnInit() {
    this.allRecipes = this.service.getAllRecipes();
    console.log(this.allRecipes);
  }

}
