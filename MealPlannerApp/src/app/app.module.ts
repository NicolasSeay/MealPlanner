import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserEffects } from './effects/user.effects';
import { Logger } from './app.logger';
import { RecipeEffects } from './effects/recipe.effects';
import { userReducer } from './reducers/user.reducer';
import { recipeReducer } from './reducers/recipe.reducer';
import { loginErrorReducer, registerErrorReducer } from './reducers/error.reducer';
import { ResponseInterceptor } from './interceptors/responseInterceptor';
import { RequestInterceptor } from './interceptors/requestInterceptor';
import { ingredientReducer } from './reducers/ingredient.reducer';
import { IngredientEffects } from './effects/ingredient.effects';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { AdPanelComponent } from './components/ad-panel/ad-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    NavPanelComponent,
    AdPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      user: userReducer,
      recipes: recipeReducer,
      ingredients: ingredientReducer,
      loginError: loginErrorReducer,
      registerError: registerErrorReducer
    }, {}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([UserEffects, RecipeEffects, IngredientEffects]),
  ],
  providers: [
    Logger,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
