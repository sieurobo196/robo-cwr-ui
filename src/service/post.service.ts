import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Post} from "../app/model/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private listPost: Post[] | undefined; // Variable to store fetched data

  constructor(private http: HttpClient) {
  }

  getListPost(type: string): Observable<Post[]> {
    // Check if data is already fetched and cached
    if (this.listPost) {
      console.log("rob----get cache")
      return of(this.listPost); // Return cached data
    } else {
      console.log("rob----call api")
      // Fetch data from the API and cache it
      return this.http.get<Post[]>('/post/list?type=' + type).pipe(
        tap(data => this.listPost = data) // Cache the fetched data
      );
    }
  }
}
