import { Component, OnInit } from '@angular/core';
import { Recept } from 'src/app/model/Recept';
import { Router } from '@angular/router';
import { RecipeServiceService } from 'src/app/service/recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  testRecept:Recept

  constructor(private router:Router, private service:RecipeServiceService) { }

  ngOnInit() {
  }

  onSubmit(name, calorie, ingredients, time){
    this.testRecept= new Recept(name, calorie, ingredients, time);
    this.service.saveInLocalStorage(this.testRecept);
    this.router.navigateByUrl('/list');
  }

}
