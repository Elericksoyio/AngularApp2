import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router ,
              private  _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.heroe = this._heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
   }

  ngOnInit(): void {
  }

}
