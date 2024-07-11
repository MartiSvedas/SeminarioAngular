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
movies: Movie[]=[
//  {
//    "id": 1,
//    nombre: 'INTESAMENTE 2',
//    imagen: './assets/img/intensamente2.jpg',
//    sinopsis: 'La película de Disney y Pixar INTENSA-MENTE 2 regresa a la mente de la recién adolescente Riley justo cuando el cuartel general está sufriendo una repentina demolición para hacer sitio a algo totalmente inesperado: ¡nuevas emociones!',
//    asientos: 100,
//    cantidad: 0,
//    fecha: new Date('07-20-2024'),
//    precioTotal: 0
//  },
//    {
//      "id": 2,
//      nombre: 'MI VILLANO FAVORITO',
//      imagen: './assets/img/miVillanoFavorito4.jpg',
//      sinopsis: 'Gru, Lucy y las niñas -Margo, Edith y Agnes- dan la bienvenida a un nuevo miembro en la familia: Gru Junior, que parece llegar con el propósito de ser un suplicio para su padre. Gru tendrá que enfrentarse en esta ocasión a Maxime Le Mal y su malévola novia Valentina, lo que obligará a la familia a tener que darse a la fuga.',
//      asientos: 100,
//      cantidad: 0,
//      fecha :new Date('07-28-2024'),
//      precioTotal: 0
//    },
//    {
//      "id": 3,
//      nombre: 'DEADPOOL & WOLVERINE',
//      imagen: './assets/img/Deadpool&Wolverine.jpg',
//      sinopsis: 'Wolverine se recupera de sus heridas cuando se cruza con el presumido, Deadpool, que ha viajado en el tiempo para curarlo con la esperanza de hacerse amigos y formar un equipo para acabar con un enemigo común.',
//      asientos: 100,
//      cantidad: 100,
//      fecha:new Date('07-19-2024'),
//      precioTotal: 0
//    },
//    {
//      "id": 4,
//      nombre: 'TORNADOS',
//      imagen: './assets/img/Tornados.jpg',
//      sinopsis: ' Ambientada en la lucha contra fenómenos meteorológicos extremos, Tornados presenta a Kate Cooper (interpretada por Edgar-Jones), una ex cazadora de tormentas y a Tyler Owens (Powell), un aventurero de las redes sociales, quienes se ven envueltos en desafíos sin precedentes ante sistemas de tormentas convergentes sobre Oklahoma.',
//      asientos: 100,
//      cantidad: 0,
//      fecha: new Date('07-16-2024'),
//      precioTotal: 0
//    },
//
]

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
