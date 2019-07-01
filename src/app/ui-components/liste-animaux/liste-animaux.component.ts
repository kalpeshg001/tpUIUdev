import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-liste-animaux',
  templateUrl: './liste-animaux.component.html',
  styleUrls: ['./liste-animaux.component.scss']
})
export class ListeAnimauxComponent implements OnInit {
  animaux: { race: string; espece: string; description: string; url: string }[];
  constructor(private service: AnimalService) {}

  ngOnInit() {
    this.animaux = this.service.listerAnimaux();
  }
}
