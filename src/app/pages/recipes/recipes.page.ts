import { Component, OnDestroy, OnInit } from '@angular/core';
import { Paths } from '../../app-routing.module';
import { RecipesService } from '../../services/recipes/recipes.service';
import { IRecipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: IRecipe[];
  // recipesSubscription: Subscription | undefined;
  pathRecipes: Paths = Paths.RECIPES;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    // this.recipesSubscription = this.recipesService.recipesChanged.subscribe(
    //   (recipes) => {
    //     this.recipes = recipes;
    //   }
    // );
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ngOnDestroy(): void {
    // this.recipesSubscription.unsubscribe();
  }
}
