import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { viewRecipes } from 'src/app/actions/recipe.actions';
import { Logger } from 'src/app/app.logger';
import { selectExpiredSessionError, selectRecipes } from 'src/app/app.selectors';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomePageComponent implements OnInit {

  recipes$: Observable<Recipe[]>
  expiredSessionError$: Observable<String>
  userId: number = -1
  expandedRecipes = new Set<number>()

  constructor(private store: Store, private logger: Logger, private _activatedRoute: ActivatedRoute) {
    this.recipes$ = this.store.select(selectRecipes)
    this.expiredSessionError$ = this.store.select(selectExpiredSessionError)
  }

  ngOnInit(): void {
    // retrieve userId from router
    this.userId = Number(this._activatedRoute.snapshot.paramMap.get("userId"))

    // get recipe list from service and saves in store
    this.store.dispatch(viewRecipes({ userId: this.userId }))
  }

  isExpanded(recipeId: number) {
    return this.expandedRecipes.has(recipeId)
  }

  expandRecipe(recipeId: number) {
    this.isExpanded(recipeId)
      ? this.expandedRecipes.delete(recipeId)
      : this.expandedRecipes.add(recipeId)
  }

}
