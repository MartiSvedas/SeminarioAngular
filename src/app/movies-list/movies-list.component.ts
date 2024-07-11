import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit{
title: string="Peliculas en cartelera"
movies: Movie[]=[]

constructor(private movieDataService : MovieDataService){}


ngOnInit(){
this.movieDataService.getMovies().subscribe(m=>this.movies=m)
}

Comprar(movie: Movie) {
  alert("Se ha comprado las entradas exitosamente, verifique su correo electronico para ver el resumen de su compra ")
  movie.asientos-=movie.compradas;
  movie.compradas+=movie.cantidad;
  movie.cantidad=0;
  }
};
