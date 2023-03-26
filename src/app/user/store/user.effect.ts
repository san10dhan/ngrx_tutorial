import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { UserService } from "../user.service";
import { invokeUserApi, userFetchApiSuccess } from "./user.action";

@Injectable()
export class userEffects {
    constructor(private actions$: Actions, private userService: UserService) { }
    loadAllUsers$ = createEffect(() => 
        this.actions$.pipe(
            ofType(invokeUserApi),
            switchMap(() => {
                return this.userService.getUser().pipe(
                    map((data) => userFetchApiSuccess({users: data}))
                )
            })
        )
    )
}