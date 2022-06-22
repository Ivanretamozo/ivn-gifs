import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent{


  constructor(private gifsService: GifsService){};

  
  public get historial() : string[] {
    return this.gifsService.historial
  }

  buscar(item:string){
    this.gifsService.buscarGifs(item)
  }
  

  
   

}
