import { Component } from '@angular/core';

interface User {
  name: string,
  image: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-proj';
  name: string = '';
  poster: string = '';
  rating: number = 0;
  summary: string = '';
  isAddingMovie = false;
  isEditingMovie = false;
  idToEdit: number = -1;
  users: Array<User> = [
    {
      name: 'Renuga',
      image: 'data:image/jpeg;base64,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'
    },
    {
      name: 'Elanchik',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]
  movies = [
    {
      "id": 1,
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
      "id": 2,
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      "id": 3,
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": 4,
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": 5,
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "id": 6,
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": 7,
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": 8,
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": 9,
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "PS2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8,
      "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
      "id": 10
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8,
      "trailer": "https://youtu.be/NgsQ8mVkN8w",
      "id": 11
    }
  ]

  deleteMovie(id: number) {
    this.movies.forEach((value,index) => {
      if(value.id === id) {
        this.movies.splice(index,1)
      }
    })
  }
  
  onAddingMovie() {
    if(this.isEditingMovie) {
      this.movies.forEach((movie,index) => {
        if(movie.id === this.idToEdit) {
          this.movies[index] = {
            id: this.idToEdit,
            name: this.name,
            poster: this.poster,
            rating: this.rating,
            summary: this.summary,
            trailer: "https://youtu.be/NgsQ8mVkN8w"
          }
        }
      })
    }
    else {
      this.movies.push({
        id: this.movies.length + 1,
        name: this.name,
        poster: this.poster,
        rating: this.rating,
        summary: this.summary,
        trailer: "https://youtu.be/NgsQ8mVkN8w"
      })
    }
    this.isAddingMovie = false
    this.isEditingMovie = false
    this.clearAllInputs()
  }

  editMovie(id: number) {
    this.isEditingMovie = true
    this.idToEdit = id
    let editMovie = this.movies.filter(movie => movie.id === id)[0]
    this.name = editMovie.name
    this.poster = editMovie.poster
    this.rating = editMovie.rating
    this.summary = editMovie.summary
  }

  clearAllInputs() {
    this.name = ''
    this.poster = ''
    this.rating = 0
    this.summary = ''
  }
}
