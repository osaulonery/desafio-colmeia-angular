import { Component } from '@angular/core';
import { FilmeCardService } from '../filme-card/filme-card.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent {
  busca: string = '';
  resultadosBusca: any;
  estaDesativo: boolean = true;

  constructor(private service: FilmeCardService) {}

  buscaFilme() {
    this.service.buscaFilmeService(this.busca).subscribe((res: any) => {
      this.resultadosBusca = res.results;
    });
  }
}
