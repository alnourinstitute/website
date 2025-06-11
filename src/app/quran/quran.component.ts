import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quran',
  imports: [],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.css'
})
export class QuranComponent {
  constructor (private location: Location) {}

  goBack(): void {
    this.location.back()
  }

}
