import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksApi } from '../store/book.action';
import { selectBooks } from '../store/book.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(invokeBooksApi());
  }
  books$ = this.store.pipe(select(selectBooks));
}
