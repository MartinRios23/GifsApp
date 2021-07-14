import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifServiceService } from '../services/gif-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent{

  //El ! es un operador para asegurar que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GifServiceService){}

  buscar(){
    
    const valorBusqueda = this.txtBuscar.nativeElement.value;

    if(valorBusqueda.trim().length === 0){
      return;
    }

    this.txtBuscar.nativeElement.value = "";
    this.gifService.buscarGifs(valorBusqueda);
  }

}
