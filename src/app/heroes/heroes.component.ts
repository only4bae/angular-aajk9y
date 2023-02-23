import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroesOf();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getHeroesOf(): void {
    this.heroService
      .getHeroesOf()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
