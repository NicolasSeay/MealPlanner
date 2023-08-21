import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Logger } from "../app.logger";
import { viewRecipes, viewRecipesError, viewRecipesSuccess } from "../actions/recipe.actions";
import { RecipeService } from "../services/recipe.service";

@Injectable()
export class RecipeEffects {

    constructor(private recipeService: RecipeService, private actions$: Actions, private logger: Logger) {}

    viewRecipes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(viewRecipes),
            switchMap((action) => {
                return this.recipeService.recipes(action.userId).pipe(
                    map(recipes => {
                        this.logger.debug("[RecipeEffects] Success on view recipes")
                        return viewRecipesSuccess({ recipes })
                    }),
                    catchError(() => {
                        this.logger.info("[RecipeEffects] Error on view recipes")
                        return of(viewRecipesError())
                    })
                )
            })
        )
    )

}