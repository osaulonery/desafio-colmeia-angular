import { _isTestEnvironment } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Page } from 'src/app/model/moviedb.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmeCardService {
  url: string =
    environment.apiUrl +
    '/movie/popular' +
    environment.apiKey +
    environment.idioma +
    environment.regiao;

  constructor(private http: HttpClient) {}

  pegaFilmesPopularesService(): Observable<Page> {
    return this.http.get<Page>(this.url).pipe(map((retorno) => retorno));
  }

  buscaFilmeService(query: string): Observable<any> {
    const url =
      environment.buscaUrl +
      environment.apiKey +
      environment.idioma +
      environment.query +
      query;
    return this.http.get(url);
  }
}
