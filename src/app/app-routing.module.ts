import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

//RUTAS
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book',
    component: BookListComponent
  },
  {
    path: 'book/create',
    component: BookFormComponent
  },
  {
    path: 'book/edit/:id',
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
