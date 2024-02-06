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
                        if(user == null) {
                            this.logger.info("[UserEffects] No matching user credentials")
                            return loginError()
                        }
                
                        this.logger.debug("[UserEffects] Success on login ")
                        this.router.navigate(['/home/' + user.id])
                        this.logger.info("[UserEffects] Navigating to /home/" + user.id)

                        sessionStorage.setItem('userId', user.id.toString())
                        
                        return loginSuccess({ user })
                    }),
                    catchError(() => {
                        this.logger.debug("[UserEffects] Error on login")
                        return of(loginError())
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
                catchError(() => {
                    this.logger.info("[UserEffects] Unable to register user")
                    return of(registerError())
                })
            )
        ))
    )
}