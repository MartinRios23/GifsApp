import { Component} from '@angular/core';
import { GifServiceService } from '../../gifs/services/gif-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  constructor(private gifService:GifServiceService) {
  }

  get historial(){
    return this.gifService.historial;
  }

  

    

}
