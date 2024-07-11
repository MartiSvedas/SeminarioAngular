import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrl: './input-quantity.component.scss'
})
export class InputQuantityComponent {
precioEntrada: number= 2500;
  @Input()
  cantidadEntradas!:number;
  @Input()
  asientosDisponibles!:number
  @Input()
  precioTotal!:number
  @Output()
  cantidadEntradasChange:EventEmitter<number>=new EventEmitter<number>();
  @Output()
  precioTotalChange:EventEmitter<number>=new EventEmitter<number>();

upQuantity():void{
  if(this.cantidadEntradas<this.asientosDisponibles){
    this.cantidadEntradas++;
    this.cantidadEntradasChange.emit(this.cantidadEntradas);
  }
}
downQuantity():void{
  if(this.cantidadEntradas>0){
    this.cantidadEntradas--;
    this.cantidadEntradasChange.emit(this.cantidadEntradas);
  }
}

  changePrice():void {
    this.precioTotal=this.precioEntrada * this.cantidadEntradas;
    this.precioTotalChange.emit(this.precioTotal);
  }

onChangeQuantity(event: { key: any; preventDefault: () => void; }): void{
  this.cantidadEntradasChange.emit(this.cantidadEntradas)
}
onChangePrice(event: { key: any; preventDefault: () => void; }): void{
this.precioTotalChange.emit(this.precioTotal)
}



}
