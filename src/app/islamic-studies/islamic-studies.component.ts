import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-islamic-studies',
  imports: [],
  templateUrl: './islamic-studies.component.html',
  styleUrl: './islamic-studies.component.css'
})
export class IslamicStudiesComponent {
    constructor (private location: Location) {}

  goBack(): void {
    this.location.back()
  }

}
