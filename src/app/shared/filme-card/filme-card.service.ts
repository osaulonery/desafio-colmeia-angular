import { _isTestEnvironment } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmeCardService {
  public url = environment.cardUrl;

  constructor(private http: HttpClient) {}

  getFilmes() {}
}
