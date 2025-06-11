import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { CoursesComponent } from '../courses/courses.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    CoursesComponent,
    WhyUsComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
