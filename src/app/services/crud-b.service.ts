import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CrudBService {
  API_URL =  'https://private-fd1b9-traveling1.apiary-mock.com/';
  header = new HttpHeaders().set('Content-type', 'application/json');

  
  constructor(private http: HttpClient) { }

  //Create a post
  createPost(data: any): Observable<any>{
    let apiUrl = `${this.API_URL}/posts`
    return this.http.put(apiUrl, data)
      .pipe(
        catchError(this.error)
      )
  }
  
  // Show all posts
  showPosts(): Observable<any>{
    let apiURL = `${this.API_URL}/posts`
    return this.http.get(apiURL)
  }

  //Get categories
  getCategories(): Observable<any>{
    let apiUrl = `${this.API_URL}/categories`
    return this.http.get(apiUrl)
  }

  //Update posts
  updatePosts(id: any, data: any): Observable<any>{
    let apiURL = `${this.API_URL}/posts/${id}`
    return this.http.put(apiURL, data, {headers: this.header})
      .pipe(
        catchError(this.error)
      )

  }


  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
