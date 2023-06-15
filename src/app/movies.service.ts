import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  addMovie(data: any) {
    return this.http.post(
      'https://648a951317f1536d65e94e70.mockapi.io/movies',
      data
    );
  }

  getMovieDetail(id: string) {
    return this.http.get(
      `https://648a951317f1536d65e94e70.mockapi.io/movies/${id}`
    );
  }

  updateMovie(id: string, data: any) {
    return this.http.put(
      `https://648a951317f1536d65e94e70.mockapi.io/movies/${id}`,
      data
    );
  }
}
