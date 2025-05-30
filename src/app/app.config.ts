import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SuccessComponent } from './pages/success/success.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), // Optional if you use Angular animations
    provideRouter([
      { path: '', component: HeroComponent },
      { path: 'about', component: AboutComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'why-us', component: WhyUsComponent },
      { path: 'testimonials', component: TestimonialsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'success', component: SuccessComponent},
      { path: 'footer', component: FooterComponent }
    ]),
  ]
};