import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifServiceService {

  private api_key = "V2mBohL131Jh1CTqkvczFt85pyCU1Y0U"; 
  private servicio_url = "https://api.giphy.com/v1/gifs";
  private _historialBusqueda:string[] = [];

  public resultados:Gif[] = [];

  get historial(){
    return [...this._historialBusqueda];
  }

  constructor(private http:HttpClient){
    this._historialBusqueda = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query:string){

    //Acá establezco que todo va a pasarse como minúscula.
    query = query.trim().toLowerCase();
    //Si el historial de búsqueda NO INCLUYE el valor que paso por parámetro, lo inserto. Sino, no pasa nada
    if(!this._historialBusqueda.includes(query)){
      this._historialBusqueda.unshift(query);
      this._historialBusqueda= this._historialBusqueda.splice(0,10);
      
      localStorage.setItem('historial', JSON.stringify(this._historialBusqueda));
    }


    const params = new HttpParams()
          .set('api_key', this.api_key)
          .set('limit', '10')
          .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicio_url}/search?`, {params})
          .subscribe( (resp) =>{
            this.resultados = resp.data;
            localStorage.setItem('resultados', JSON.stringify(this.resultados));
          } )
  }
}
