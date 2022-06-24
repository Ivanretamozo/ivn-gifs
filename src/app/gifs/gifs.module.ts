import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';

import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MasonryComponenteComponent } from './masonry-componente/masonry-componente.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    MasonryComponenteComponent
  ],
  exports:[GifsPageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxMasonryModule,

    ],
})
export class GifsModule { }
