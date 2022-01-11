import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.BASE_URL}book/getBooks`);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.BASE_URL}/book/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.BASE_URL}/book/createBook`, book);
  }

  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.BASE_URL}/book/deletebook?bookID=${id}`);
  }

  updateBook(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.BASE_URL}/book/update?bookID=${id}`, book);
  }
}
