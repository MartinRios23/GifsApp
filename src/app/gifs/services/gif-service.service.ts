import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifServiceService {

  private _historialBusqueda:string[] = [];

  get historial(){
    return [...this._historialBusqueda];
  }
  
  buscarGifs(query:string){

    //Acá establezco que todo va a pasarse como minúscula.
    query = query.trim().toLowerCase();
    //Si el historial de búsqueda NO INCLUYE el valor que paso por parámetro, lo inserto. Sino, no pasa nada
    if(!this._historialBusqueda.includes(query)){
      this._historialBusqueda.unshift(query);
      this._historialBusqueda= this._historialBusqueda.splice(0,10);
    }
  }


}
