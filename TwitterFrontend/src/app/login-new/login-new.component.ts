import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent {
  username: FormControl = new FormControl('value', Validators.minLength(3));
  hidePassword = true;

  setUsername(pUsername: String) {
    this.username.setValue(pUsername);
  }
}
