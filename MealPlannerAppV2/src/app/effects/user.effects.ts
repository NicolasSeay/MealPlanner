import { UserService } from "../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { login, loginError, loginSuccess } from "../actions/user.actions";

@Injectable()
export class AppEffects {

    constructor(private userService: UserService, private actions$: Actions) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((actions) => this.userService.login(actions.username, actions.password).pipe(
                map(user => loginSuccess({user})),
                catchError(() => of(loginError()))
            )
        ))
    )

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((actions) => this.userService.login(actions.username, actions.password).pipe(
                map(user => loginSuccess({user})),
                catchError(() => of(loginError()))
            )
        ))
    )
}