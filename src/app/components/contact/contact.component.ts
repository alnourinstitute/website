import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] 
})

export class ContactComponent {

  constructor(private router: Router) {}

  handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    // Netlify form submission manually with fetch
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as any).toString()
    })
    .then(() => this.router.navigate(['/success']))
    .catch(error => {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    });
  }
  

}
