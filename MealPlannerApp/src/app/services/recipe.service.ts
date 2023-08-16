import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logger } from '../app.logger';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = "http://localhost:8080/recipe"

  constructor(private http: HttpClient, private logger: Logger) { }

  recipes(userId: number) {
    this.logger.info("[RecipeService] Sending recipe list request to backend")
    return this.http.get<Recipe[]>(
      this.baseUrl + "/" + userId,
      {
        headers: {'content-type':'application/json'}
      }
    )
  }

}
