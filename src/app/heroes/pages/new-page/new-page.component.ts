import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent {

  constructor(private heroesService: HeroesService ) {}

  public heroForm = new FormGroup({
    id:  new FormControl(''),
    superhero: new FormControl('', {nonNullable: true}),
    publisher:  new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:  new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  } )

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value,
    })
  }
}
