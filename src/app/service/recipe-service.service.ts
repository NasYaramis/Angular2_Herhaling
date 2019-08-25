import { Injectable } from '@angular/core';
import { Recept } from '../model/Recept';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor() { }

  saveInLocalStorage(recipe:Recept):void 
  {
    localStorage.setItem(recipe.name, JSON.stringify(recipe));
  }

  getAllRecipes():Recept[] 
  {
    let archive = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- )
    {
      archive.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return archive;
  }
}
