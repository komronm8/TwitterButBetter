import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login: Boolean = false
  
  handleSubmit() {
    const name = document.querySelector('input[name=name]') as HTMLTextAreaElement
    const email = document.querySelector('input[name=email]') as HTMLTextAreaElement
    const password = document.querySelector('input[name=password]') as HTMLTextAreaElement
    type data = {
      email: String,
      password: String,
      name?: String
    }
    const data:data = {
      email: email.value,
      password: password.value
    }
    if (!this.login) {
      data.name = name.value
    }
    console.log(data)
    async function fetchRequest(url: string, data: object) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
    
    const api = this.login ? 'http://localhost:8080/api/v1/auth/authenticate' :'http://localhost:8080/api/v1/auth/register'
    fetchRequest(api, data)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        console.log(data)
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        alert(error)
      });
    
  }
}
