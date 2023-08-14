import { UserService } from "../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { login, loginError, loginInvalidCredentials, loginSuccess, register, registerError, registerSuccess } from "../actions/user.actions";
import { Logger } from "../app.logger";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {

    constructor(private userService: UserService, private actions$: Actions, private logger: Logger, private router: Router) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((actions) => {
                return this.userService.login(actions.username, actions.password).pipe(
                    map(user => {
                        if(user == null) {
                            this.logger.info("[UserEffects] No matching user credentials")
                            return loginInvalidCredentials()
                        }
                        this.logger.debug("[UserEffects] Success on login " + user.id)
                        this.router.navigate(['/home/' + user.id])
                        this.logger.info("[UserEffects] Navigating to /home/" + user.id)
                        return loginSuccess({ user })
                    }),
                    catchError((e) => {
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
                map(() => registerSuccess()),
                catchError(() => of(registerError()))
            )
        ))
    )
}