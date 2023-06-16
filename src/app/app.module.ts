import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HelloMsgComponent } from './hello-msg/hello-msg.component';
import { CounterComponent } from './counter/counter.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoContentComponent } from './todo-content/todo-content.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RxComponent } from './rx/rx.component';
import { HttpClientModule } from '@angular/common/http';
import { StockComponent } from './stock/stock.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MatCardModule } from '@angular/material/card';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: MovieListComponent,
      },
      {
        path: 'info/:id',
        component: MovieInfoComponent,
      },
      {
        path: 'edit-movie/:id',
        component: EditMovieComponent,
      },
    ],
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'add-movie',
    component: ReactiveFormsComponent,
  },
  {
    path: '**',
    component: DefaultComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloMsgComponent,
    CounterComponent,
    MovieDisplayComponent,
    ReactiveFormsComponent,
    MovieListComponent,
    TodoComponent,
    TodoContentComponent,
    HomeComponent,
    DefaultComponent,
    RxComponent,
    StockComponent,
    EditMovieComponent,
    MovieInfoComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
