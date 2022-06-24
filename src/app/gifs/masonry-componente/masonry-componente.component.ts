import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Component({
  selector: 'app-masonry-componente',
  templateUrl: './masonry-componente.component.html',
  styles: [  `
  .masonry-item { width: 300px; }
`]
})
export class MasonryComponenteComponent implements OnInit {

  constructor(private gifsService : GifsService) { }

  public get resultados(){
    return this.gifsService.resultados
  }

  

  ngOnInit(): void {
  }



}
