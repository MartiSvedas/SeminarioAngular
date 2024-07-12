import { Component, OnInit } from '@angular/core';
import { nextMovie } from './nextMovie';

@Component({
  selector: 'app-next-releases',
  templateUrl: './next-releases.component.html',
  styleUrl: './next-releases.component.scss'
})
export class NextReleasesComponent implements OnInit {
title:string='Proximos Estrenos'
nextMovies:nextMovie[]=[
  {
    "id": 1,
    imagen: './assets/img/HaroldCrayonMagico.jpg',
    nombre:'Harold y su crayon magico',
    genero:'Fantasia',
    sinopsis: 'Dentro de su libro, el aventurero Harold (Zachary Levi) puede hacer que cualquier cosa cobre vida simplemente dibujándola. Cuando crece y se dibuja a sí mismo fuera de las páginas del libro y en el mundo físico, Harold descubre que tiene mucho que aprender sobre la vida real y que su fiel crayón de color púrpura puede desencadenar más travesuras hilarantes de lo que creía posible. Cuando el poder de la imaginación ilimitada cae en las manos equivocadas, Harold y sus amigos necesitarán toda su creatividad para salvar el mundo real y el suyo propio. Harold y su crayón mágico es la primera adaptación cinematográfica del entrañable clásico infantil que ha cautivado a los jóvenes lectores durante décadas.',
    fechaEstreno: new Date('2024-08-02'),
  },{
  "id": 2,
  imagen: './assets/img/LaTrampa.jpg',
  nombre:'La Trampa',
  genero:'Triller',
  sinopsis: 'Un padre y su hija adolescente asisten a un concierto de pop, donde se dan cuenta de que están en el centro de un evento oscuro y siniestro.',
  fechaEstreno: new Date('2024-08-02'),
},
{
  id: 3,
  imagen: './assets/img/ultimoConjuro.jpg',
  nombre: 'El ultimo conjuro',
  genero: 'Terror',
  sinopsis: 'Devastado tras la muerte de su esposa, Naoto no encuentra consuelo. Su hijo, tratando de consolarse trae a casa un dedo de su madre fallecida. Este será solo el comienzo de una serie de eventos terroríficos.',
  fechaEstreno: new Date('2024-07-30')
}
]
upCommingMovie: nextMovie[]=[];

ngOnInit(): void{
  const today= new Date();
  this.upCommingMovie= this.nextMovies.filter(nextMovie=> nextMovie.fechaEstreno >today)
}
}
