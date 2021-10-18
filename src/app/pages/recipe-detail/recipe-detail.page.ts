import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Paths } from '../../app-routing.module';
import { RecipesService } from '../../services/recipes/recipes.service';
import { IRecipe } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: IRecipe;
  pathRecipes: Paths = Paths.RECIPES;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.validateRouteParam(paramMap);

      const recipeId = paramMap?.get('recipeId');
      const loadedRecipe = this.recipesService.getRecipe(recipeId);

      this.validateRecipe(loadedRecipe);
      this.loadedRecipe = loadedRecipe;
    });
  }

  onDeleteRecipe = () => {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        message: `Do you really want delete the "${this.loadedRecipe.title}" recipe?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: '',
          },
          {
            text: 'Delete',
            cssClass: '',
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              this.navigateBack();
            },
          },
        ],
      })
      .then((alertElement) => {
        alertElement.present();
      });
  };

  private validateRouteParam = (paramMap: ParamMap) => {
    if (!paramMap.has('recipeId')) {
      this.navigateBack();
      return;
    }
  };

  private validateRecipe = (loadedRecipe: IRecipe) => {
    if (this.recipesService.isEmptyObject(loadedRecipe)) {
      this.navigateBack();
      return;
    }
  };

  private navigateBack = (): void => {
    this.router.navigate([`/${Paths.RECIPES}`]);
  };
}
