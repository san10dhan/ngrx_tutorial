import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeUserApi } from '../store/user.action';
import { selectUser } from '../store/user.selector';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  constructor(private store: Store) { }
  users$ = this.store.pipe(select(selectUser));
  ngOnInit(): void {
    this.store.dispatch(invokeUserApi());
  }
}
