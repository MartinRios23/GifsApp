import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GifServiceService {

  private _historialBusqueda:string[] = [];

  //TODO: Cambiar any por el tipado correspondiente
  public resultados:any[] = [];

  get historial(){
    return [...this._historialBusqueda];
  }

  constructor(private http:HttpClient){}

  buscarGifs(query:string){

    //Acá establezco que todo va a pasarse como minúscula.
    query = query.trim().toLowerCase();
    //Si el historial de búsqueda NO INCLUYE el valor que paso por parámetro, lo inserto. Sino, no pasa nada
    if(!this._historialBusqueda.includes(query)){
      this._historialBusqueda.unshift(query);
      this._historialBusqueda= this._historialBusqueda.splice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=V2mBohL131Jh1CTqkvczFt85pyCU1Y0U&q=${query}&limit=10`)
          .subscribe( (resp:any) =>{
            console.log(resp.data);
            this.resultados = resp.data;
          } )
  }
}
