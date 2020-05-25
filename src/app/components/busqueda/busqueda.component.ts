import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import {  HeroesService, Heroe } from '../../services/heroes.services';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string = "";
  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
    private _heroService:HeroesService ) {


    }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.term);
      this.heroes=this._heroService.buscarHeroes(params.term);
      this.termino=params.term;
      //console.log(this.heroes);
    });
  }

  verHeroe( idx:string){

    console.log('Nokmbre ' + idx);
    let indice = this._heroService.buscarHeroePorNombre(idx);
    console.log(indice);

    this.router.navigate(['/heroe', indice]);
  }

}
