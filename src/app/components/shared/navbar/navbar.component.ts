import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe} from '../../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
              private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(texto: string){
  console.log(texto);
  //let heroes:Heroe[]=[];
  //heroes = this._heroesService.buscarHeroes(texto);
  //console.log("Buscop");
  //console.log(heroes);

  this.router.navigate(['/busqueda', texto]);


  }

}
