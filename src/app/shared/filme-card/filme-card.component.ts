import { Component, Input, OnInit } from '@angular/core';
import { MovieDB, Page } from 'src/app/model/moviedb.model';
import { environment } from 'src/environment/environment';
import { FilmeCardService } from './filme-card.service';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.scss'],
})
export class FilmeCardComponent implements OnInit {
  page: Page | undefined;
  filmes: MovieDB[] = [];

  constructor(public service: FilmeCardService) {}

  ngOnInit(): void {
    this.pegarFilmes();
  }

  pegarFilmes() {
    this.service.pegaFilmesPopularesService().subscribe((res) => {
      this.page = res;
      this.filmes = this.page.results as MovieDB[];
    });
  }
}
