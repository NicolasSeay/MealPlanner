import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Logger } from "../app.logger";
import { Router } from "@angular/router";
import { viewRecipes, viewRecipesError, viewRecipesSuccess } from "../actions/recipe.actions";
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../models/recipe";

@Injectable()
export class RecipeEffects {

    constructor(private recipeService: RecipeService, private actions$: Actions, private logger: Logger, private router: Router) {}

    viewRecipes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(viewRecipes),
            switchMap((actions) => {
                return this.recipeService.recipes(actions.id).pipe(
                    map(recipes => {
                        this.logger.debug("[RecipeEffects] Success on view recipes")
                        // this.logger.info("[RecipeEffects] Recipe list from service:")
                        console.log(recipes)
                        return viewRecipesSuccess({ recipes })
                    }),
                    catchError((e) => {
                        this.logger.info("[RecipeEffects] Error on view recipes")
                        return of(viewRecipesError())
                    })
                )
            })
        )
    )

}