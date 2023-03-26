import { createAction, props } from "@ngrx/store";
import { User } from "./user";

export const invokeUserApi = createAction(
    '[Users API] invoke users fetch API'
);

export const userFetchApiSuccess = createAction(
    '[Users API] users fetch API success',
    props<{users: User[]}>()
)