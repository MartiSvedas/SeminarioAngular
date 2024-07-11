import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Movie } from './movies-list/movie';

const URL= 'https://60ce790c91cc8e00178dcf75.mockapi.io/api/v1/Cinema';
const today= new Date();
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http:HttpClient) { }

  public getMovies(): Observable<Movie[]>{
 return this.http.get<Movie[]>(URL)
 .pipe(
  tap((movies: Movie[]) => 
    movies.forEach(movie => {
      movie.cantidad =0;
      movie.asientos = 100;
      movie.precioTotal = 0;
      movie.compradas=0;
      movie.fecha>today;
    })
  )
)
}
}