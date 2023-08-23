import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { viewRecipes } from 'src/app/actions/recipe.actions';
import { Logger } from 'src/app/app.logger';
import { selectRecipes } from 'src/app/app.selectors';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomePageComponent implements OnInit {

  recipes$: Observable<Recipe[]>
  userId: number = -1
  recipes: Recipe[] = []

  constructor(private store: Store, private logger: Logger, private _activatedRoute: ActivatedRoute) {
    this.recipes$ = this.store.select(selectRecipes)
  }

  ngOnInit(): void {
    // retrieve userId from router
    this.userId = Number(this._activatedRoute.snapshot.paramMap.get("userId"))

    // get recipe list from service and saves in store
    this.store.dispatch(viewRecipes({ userId: this.userId }))
  }

}
