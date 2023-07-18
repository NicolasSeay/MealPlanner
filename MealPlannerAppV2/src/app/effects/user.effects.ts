import { UserService } from "../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { login, loginError, loginSuccess } from "../actions/user.actions";
import { Logger } from "../app.logger";

@Injectable()
export class UserEffects {

    constructor(private userService: UserService, private actions$: Actions, private logger: Logger) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((actions) => {
                return this.userService.login(actions.username, actions.password).pipe(
                    map(user => { this.logger.debug("[Effect] Success on login " + user.id); return loginSuccess({user}) }),
                    catchError(() => { this.logger.debug("[Effect] Error on login"); return of(loginError()) })
                )
            })
        )
    )

    // register$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(login),
    //         switchMap((actions) => this.userService.login(actions.username, actions.password).pipe(
    //             map(user => loginSuccess({user})),
    //             catchError(() => of(loginError()))
    //         )
    //     ))
    // )
}