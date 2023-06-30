import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Boolean = false
  
  handleSubmit() {
    const username = document.querySelector('input[name=username]') as HTMLTextAreaElement
    const password = document.querySelector('input[name=password]') as HTMLTextAreaElement
    console.log(username.value)
    console.log(password.value)
  }
}
