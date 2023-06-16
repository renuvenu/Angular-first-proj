import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent {
  movieId = '';
  movieDetail: any;
  constructor(private moviesService: MoviesService,private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.movieId = param['id'];
    });

    this.moviesService.getMovieDetail(this.movieId).subscribe((val) => {
      this.movieDetail = val
    })
  }
}
