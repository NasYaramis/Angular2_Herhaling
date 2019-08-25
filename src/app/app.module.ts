import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';
  
@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    ListRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: AddRecipeComponent},
      {path: 'list', component: ListRecipeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
