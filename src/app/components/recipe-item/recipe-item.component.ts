import { Component, Input, OnInit } from '@angular/core';
import { Paths } from '../../app-routing.module';
import { IRecipe } from '../../pages/recipes/recipes.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: IRecipe;
  @Input() pathRecipes: Paths;

  constructor() {}

  ngOnInit() {}
}
