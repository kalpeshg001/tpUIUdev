import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-animal',
  templateUrl: './page-animal.component.html',
  styleUrls: ['./page-animal.component.scss']
})
export class PageAnimalComponent implements OnInit {
  constructor(private animalService: AnimalService, private router: Router) {}

  public animal: any;
  ngOnInit() {
    this.animal = {
      espece: undefined,
      race: undefined,
      description: undefined,
      url: undefined
    };
  }

  valider() {
    this.animalService.ajouterAnimal(this.animal);
    this.router.navigateByUrl('/');
  }
}
