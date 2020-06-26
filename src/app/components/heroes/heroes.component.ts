import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(
    private _heroesService:HeroesService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeores();
    //console.log(this.heroes);
  }

  verHeroe(idx:number){
    this.router.navigate(['heroe', idx])
  }

}
