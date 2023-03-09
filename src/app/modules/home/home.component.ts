import { Component, OnInit } from '@angular/core';
import { FilmeCardService } from 'src/app/shared/filme-card/filme-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filmes: any;

  constructor(public service: FilmeCardService) {}

  ngOnInit(): void {}
}
