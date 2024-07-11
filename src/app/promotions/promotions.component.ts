import { Component } from '@angular/core';
import { promotion } from './promotion';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {
title:string="Promociones vigentes"
Promotions: promotion[]=[
  {
    id: 0,
    imagen: './assets/img/promoPersonalPay.png',
    nombre: 'Personal Pay',
    tipoBeneficio: 'Pagando con tu billeteria virtual Personal Pay, tenés 2x1 en entradas todos los días. El beneficio aplica tanto para compra de entradas en el cine o de forma online a través de Miboleteria.com.ar',
    fechaValidacion: 'Valida Desde 08/04/2022 al 31/08/2024'
  },
  {
    id: 1,
    imagen: './assets/img/clubMovistar.png',
    nombre: 'Club Movistar',
    tipoBeneficio: 'Presentando el código de Club Movistar podes acceder a un beneficio de 2x1 en entradas todos los días.',
    fechaValidacion: 'Valida Desde 01/06/2022 al 31/10/2024'
  },
  {
    id: 2,
    imagen: './assets/img/clubCronica.png',
    nombre: 'Club Cronica',
    tipoBeneficio: ' Si sos socio de CLUB CRÓNICA, podés acceder a un beneficio de 2x1 en entradas de cine todos los días.',
    fechaValidacion: 'Valida Desde 12/04/2022 al 30/12/2024'
  }
]

}
