import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export enum Paths {
  RECIPES = 'recipes',
  RECIPE_DETAIL = ':recipeId',
}

const routes: Routes = [
  {
    path: '',
    redirectTo: Paths.RECIPES,
    pathMatch: 'full',
  },
  {
    path: Paths.RECIPES,
    children: [
      {
        path: '',
        // page lazy loading
        loadChildren: () =>
          import('./pages/recipes/recipes.module').then(
            (m) => m.RecipesPageModule
          ),
      },
      {
        path: Paths.RECIPE_DETAIL,
        loadChildren: () =>
          import('./pages/recipe-detail/recipe-detail.module').then(
            (m) => m.RecipeDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
