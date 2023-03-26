import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { userFetchApiSuccess } from "./user.action";

export const initialUserState: Readonly<User[]> = [];

export const userReducer = createReducer(initialUserState,
    on(userFetchApiSuccess, (state, { users }) => {
        return users;
    })
)