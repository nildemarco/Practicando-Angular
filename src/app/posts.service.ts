import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserPost } from '../app/UserPost';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  post: UserPost

  private postUrl = 'https://jsonplaceholder.typicode.com/posts';



  constructor(private http: HttpClient) {
    console.log("Este servicio esta funcionando")
  }

  getPost() {
    return this.http.get<UserPost[]>(this.postUrl)
  }
}
