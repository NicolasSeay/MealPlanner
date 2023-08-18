import { UserService } from "../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { login, loginError, loginSuccess, register, registerError } from "../actions/user.actions";
import { Logger } from "../app.logger";
import { Router } from "@angular/router";
import { User } from "../models/user";

@Injectable()
export class UserEffects {

    constructor(private userService: UserService, private actions$: Actions, private logger: Logger, private router: Router) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((actions) => {
                return this.userService.login(actions.username, actions.password).pipe(
                    map(response => {
                        if(response == null || response.body == null) {
                            this.logger.info("[UserEffects] No matching user credentials")
                            return loginError()
                        }

                        const user: User = response.body as User
                
                        this.logger.debug("[UserEffects] Success on login " + response.body)
                        this.router.navigate(['/home/' + user.id])
                        this.logger.info("[UserEffects] Navigating to /home/" + user.id)

                        let jwt = response.headers.get('Authorization')
                        if (jwt == null) {
                            return loginError()
                        }
                        sessionStorage.setItem('userId', user.id.toString())
                        localStorage.setItem('Authorization', jwt)
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
            switchMap((actions) => this.userService.register(actions.firstname, actions.lastname, actions.username, actions.password).pipe(
                map(() => {
                    this.logger.info("[UserEffects] Successfully registered, attempting to login")
                    return login({ username: actions.username, password: actions.password})
                }),
                catchError(() => {
                    this.logger.info("[UserEffects] Unable to register user")
                    return of(registerError())
                })
            )
        ))
    )
}