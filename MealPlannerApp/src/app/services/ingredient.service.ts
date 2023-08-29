import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logger } from '../app.logger';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  baseUrl = "http://localhost:8080/ingredient"

  constructor(private http: HttpClient, private logger: Logger) { }

  ingredients(recipeId: number) {
    this.logger.info("[IngredientService] Getting ingredients from backend")
    return this.http.get<Ingredient[]>(
      this.baseUrl + "/" + recipeId
    )
  }

}
