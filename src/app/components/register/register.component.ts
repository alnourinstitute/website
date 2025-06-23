import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../hero/hero.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroComponent],
  template: `
    <app-hero></app-hero>

    <div class="container mt-4">
      <h2>Register</h2>
      <form (ngSubmit)="onSubmit()" #form="ngForm">
        <div class="mb-3">
          <input type="text" name="name" [(ngModel)]="user.name" class="form-control" placeholder="Name" required />
        </div>
        <div class="mb-3">
          <input type="email" name="email" [(ngModel)]="user.email" class="form-control" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input type="password" name="password" [(ngModel)]="user.password" class="form-control" placeholder="Password" required />
        </div>
        <button type="submit" class="btn btn-success">Register</button>
      </form>
    </div>
  `
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/register', this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => alert('Error: ' + err.error.message)
    });
  }
}