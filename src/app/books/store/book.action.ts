import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const invokeBooksApi = createAction(
    "[Books API] invoke books fetch API"
)

export const BooksFetchApiSuccess = createAction(
    "[Books API] books fetch API Success",
    props<{allBooks: Book[]}>()
)
