import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

interface movieComp {
  id: string;
  name: string;
  rating: number;
  poster: string;
  summary: string;
  trailer: string;
}

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
})
export class MovieDisplayComponent {
  constructor(private router: Router) {}
  @Input() movie: movieComp = {
    id: '',
    name: '',
    rating: 0,
    poster: '',
    summary: '',
    trailer: '',
  };

  @Output() idToDelete: EventEmitter<any> = new EventEmitter();
  @Output() idToEdit: EventEmitter<any> = new EventEmitter();
  @Output() idToToggle: EventEmitter<any> = new EventEmitter();

  onDelete(id: string) {
    this.idToDelete.emit(id);
  }

  onEdit(id: string) {
    this.router.navigate([`/edit-movie/${id}`]);
  }

  toggle(id: string) {
    // this.idToToggle.emit(id)
  }
}
