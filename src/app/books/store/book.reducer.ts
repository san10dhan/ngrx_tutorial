import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import { BooksFetchApiSuccess } from './book.action';

export const initialState: ReadonlyArray<Book> = [
  {
    id: 1,
    title: 'json-server',
    author: 'typicode',
    cost: 200,
  },
];

export const bookReducer = createReducer(
  initialState,
  on(BooksFetchApiSuccess, (state, { allBooks }) => {
    return allBooks;
  })
);
