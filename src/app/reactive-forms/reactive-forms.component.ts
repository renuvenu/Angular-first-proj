import { group } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MoviesService } from 'src/app/movies.service';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  // movieForm = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   poster: new FormControl('',[Validators.required,Validators.pattern('/^http.*/')]),
  //   summary: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(40)]),
  //   rating: new FormControl('',[Validators.min(0),Validators.max(10)])
  // })

  @Output() movieData: EventEmitter<any> = new EventEmitter();

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
    private router: Router
  ) {}

  onSubmit() {
    this.moviesService
      .addMovie(this.movieForm.value)
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
