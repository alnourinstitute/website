import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../hero/hero.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroComponent],
  template: `
    <app-hero></app-hero>

    <div class="container mt-4">
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()" #form="ngForm">
        <div class="mb-3">
          <input type="email" name="email" [(ngModel)]="credentials.email" class="form-control" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input type="password" name="password" [(ngModel)]="credentials.password" class="form-control" placeholder="Password" required />
        </div>
        <button type="submit" class="btn btn-success">Login</button>
      </form>
    </div>
  `
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<any>('http://localhost:3000/api/login', this.credentials).subscribe({
      next: (res) => {
        // Simulate admin-only logic (real implementation should check token or role)
        if (res?.role === 'admin' || res?.isAdmin) {
          localStorage.setItem('adminToken', res.token); // Store token if needed
          this.router.navigate(['/admin-dashboard']); // Adjust route as needed
        } else {
          alert('Access denied: Not an admin');
        }
      },
      error: (err) => {
        alert('Login failed: ' + (err.error.message || 'Unknown error'));
      }
    });
  }
}