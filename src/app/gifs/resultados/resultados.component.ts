import { Component} from '@angular/core';
import { GifServiceService } from '../services/gif-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent{

  constructor(private gifService:GifServiceService) { }

  get resultados(){
    return this.gifService.resultados;
  }

}
