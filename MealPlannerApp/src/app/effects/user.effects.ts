import { UserService } from "../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { login, loginError, loginSuccess, register, registerError } from "../actions/user.actions";
import { Logger } from "../app.logger";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

@Injectable()
export class UserEffects {

    constructor(private userService: UserService, private actions$: Actions, private logger: Logger, private router: Router, private store: Store) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((action) => {
                return this.userService.login(action.username, action.password).pipe(
                    map(user => {
                              
                        this.logger.debug("[UserEffects] Success on login ")
                        this.router.navigate(['/home/' + user.id])
                        this.logger.info("[UserEffects] Navigating to /home/" + user.id)

                        sessionStorage.setItem('userId', user.id.toString())
                        
                        return loginSuccess({ user })
                    }),
                    catchError((e) => {
                        if (e.status == 500) {
                            this.logger.debug("[UserEffects] Error on login")
                            return of(loginError({ errorMessage: "Service Unavailable" }))
                        }
                        return of(loginError({ errorMessage: "Invalid Username or Password" }))
                        
                    })
                )
            })
        )
    )

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(register),
            switchMap((action) => this.userService.register(action.firstName, action.lastName, action.userName, action.password).pipe(
                map(() => {
                    this.logger.info("[UserEffects] Successfully registered, attempting to login")
                    return login({ username: action.userName, password: action.password})
                }),
                catchError((e) => {
                    if (e.status == 500) {
                        this.logger.info("[UserEffects] Unable to register user")
                        return of(registerError({ errorMessage: "Service Unavailable" }))
                    }
                    return of(registerError({errorMessage: "Username Taken"}))
                    
                })
            )
        ))
    )
} 