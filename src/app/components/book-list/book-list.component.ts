import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks()
    .subscribe(
      res => {
        this.books = res;
      },
      err => console.log(err)
    )
  }

}
