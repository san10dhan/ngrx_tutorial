import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./books/books.module').then((a) => a.BooksModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((b) => b.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
