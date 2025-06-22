import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<any>('http://localhost:3306/api/login', this.credentials).subscribe({
      next: (res) => {
        alert('Login successful');
        // Optionally store token or user info here
        // localStorage.setItem('token', res.token);
        this.router.navigate(['/']); // redirect after login
      },
      error: (err) => {
        alert('Login failed: ' + err.error.message);
      }
    });
  }
}
