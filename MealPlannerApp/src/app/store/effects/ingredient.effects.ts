import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Logger } from "../../app.logger";
import { IngredientService } from "../../services/ingredient.service";
import { viewIngredients, viewIngredientsError, viewIngredientsSuccess } from "../actions/ingredient.actions";

@Injectable()
export class IngredientEffects {

    constructor(private ingredientService: IngredientService, private actions$: Actions, private logger: Logger) {}

    viewIngredients$ = createEffect(() =>
        this.actions$.pipe(
            ofType(viewIngredients),
            switchMap((action) => {
                return this.ingredientService.ingredients(action.recipeId).pipe(
                    map(ingredients => {
                        this.logger.debug("[IngredientEffects] Success on view ingredients")
                        return viewIngredientsSuccess({ ingredients })
                    }),
                    catchError(() => {
                        this.logger.info("[IngredientEffects] Error on view ingredients")
                        return of(viewIngredientsError())
                    })
                )
            })
        )
    )

}