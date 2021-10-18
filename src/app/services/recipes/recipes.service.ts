import { Injectable } from '@angular/core';
import { IRecipe } from '../../pages/recipes/recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // recipesChanged = new Subject<IRecipe[]>();
  private recipes: IRecipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: ['French Fries', 'Pork', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];

  constructor() {}

  getAllRecipes = (): IRecipe[] => {
    return [...this.recipes];
    // return this.recipesChanged.next([...this.recipes]);
  };

  getRecipe = (recipeId: string): IRecipe => {
    return {
      ...this.recipes.find((recipe) => recipe.id === recipeId),
    };
  };

  deleteRecipe = (recipeId: string): void => {
    this.recipes = this.recipes.filter((recipe) => recipe?.id !== recipeId);
    // this.recipesChanged.next([...this.recipes]);
  };

  isEmptyObject = (obj: Object): boolean => {
    return obj && Object.keys(obj).length === 0;
  };
}
