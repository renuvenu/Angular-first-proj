import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  VirtualTimeScheduler,
  catchError,
  concatMap,
  mergeMap,
  switchAll,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  name: string = '';
  poster: string = '';
  rating: number = 0;
  summary: string = '';
  isAddingMovie = false;
  isEditingMovie = false;
  idToEdit: number = -1;

  movies$: any;
  ngOnInit() {
    this.movies$ = this.getMovies();
  }

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http
      .get('https://648a951317f1536d65e94e70.mockapi.io/movies')
      .pipe(catchError((err) => []));
  }

  deleteMovie(id: string) {
    this.movies$ = this.http
      .delete(`https://648a951317f1536d65e94e70.mockapi.io/movies/${id}`)
      .pipe(
        catchError((err) => []),
        concatMap(() => this.getMovies()) // in case two deletes are done
      );
  }

  movieId(index: number, movie: any) {
    return movie.id;
  }

  onAddingMovie() {
    // if(this.isEditingMovie) {
    //   this.movies.forEach((movie,index) => {
    //     if(movie.id === this.idToEdit) {
    //       this.movies[index] = {
    //         id: this.idToEdit,
    //         name: this.name,
    //         poster: this.poster,
    //         rating: this.rating,
    //         summary: this.summary,
    //         trailer: "https://youtu.be/NgsQ8mVkN8w",
    //         visible: movie.visible
    //       }
    //     }
    //   })
    // }
    // else {
    //   this.movies.push({
    //     id: this.movies.length + 1,
    //     name: this.name,
    //     poster: this.poster,
    //     rating: this.rating,
    //     summary: this.summary,
    //     trailer: "https://youtu.be/NgsQ8mVkN8w",
    //     visible: true
    //   })
    // }
    this.isAddingMovie = false;
    this.isEditingMovie = false;
    this.clearAllInputs();
  }

  // editMovie(id: number) {
  //   this.isEditingMovie = true
  //   this.idToEdit = id
  //   let editMovie = this.movies.filter(movie => movie.id === id)[0]
  //   this.name = editMovie.name
  //   this.poster = editMovie.poster
  //   this.rating = editMovie.rating
  //   this.summary = editMovie.summary
  // }

  clearAllInputs() {
    this.name = '';
    this.poster = '';
    this.rating = 0;
    this.summary = '';
  }

  // buttonToggled(id: number) {
  //   this.movies.forEach((movie,index) => {
  //     if(movie.id === id) {
  //       this.movies[index].visible = ! this.movies[index].visible
  //     }
  //   })
  // }

  // addMovie(data: any) {
  //   this.movies.push({
  //     id: this.movies.length + 1,
  //     name: data.name,
  //     poster: data.poster,
  //     rating: data.rating,
  //     summary: data.summary,
  //     trailer: "https://youtu.be/NgsQ8mVkN8w",
  //     visible: true
  //   })
  // }
}
