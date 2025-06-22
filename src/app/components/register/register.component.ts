import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:3306/api/register', this.user).subscribe({
      next: res => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: err => {
        alert('Error: ' + err.error.message);
      }
    });
  }
}