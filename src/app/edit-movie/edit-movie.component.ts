import { group } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MoviesService } from 'src/app/movies.service';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent {
  @Output() movieData: EventEmitter<any> = new EventEmitter();

  editMovieId = '';
  movieDetail: any;
  movieForm = this.fb.group({
    name: ['', Validators.required],
    poster: ['', [Validators.required, Validators.pattern('^http.*')]],
    summary: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(40)],
    ],
    rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.editMovieId = param['id'];
    });
    this.moviesService.getMovieDetail(this.editMovieId).subscribe((val) => {
      this.movieDetail = val;
      this.movieForm.controls['name'].setValue(this.movieDetail.name);
      this.movieForm.controls['poster'].setValue(this.movieDetail.poster);
      this.movieForm.controls['summary'].setValue(this.movieDetail.summary);
      this.movieForm.controls['rating'].setValue(this.movieDetail.rating);
    });
  }

  onSubmit() {
    this.moviesService
      .updateMovie(this.editMovieId, this.movieForm.value)
      .subscribe((val) => this.router.navigate(['/movies']));
    this.movieForm.reset();
  }

  get nameError() {
    return this.movieForm.get('name');
  }

  get posterError() {
    return this.movieForm.get('poster');
  }

  get summaryError() {
    return this.movieForm.get('summary');
  }

  get ratingError() {
    return this.movieForm.get('rating');
  }
}
