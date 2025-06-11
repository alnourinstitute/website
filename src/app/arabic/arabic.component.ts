import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-arabic',
  imports: [],
  templateUrl: './arabic.component.html',
  styleUrl: './arabic.component.css'
})
export class ArabicComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
