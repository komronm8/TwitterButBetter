import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validPasswordStrength } from '../forgot-password/customValidators';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent {
  hidePassword = true;

  loginCreds: FormGroup;

  constructor(private fb: FormBuilder){
    this.loginCreds = this.fb.group({
      username: ['', {
        validators: [ Validators.minLength(3), Validators.maxLength(12) ],
        asyncValidators: [],
        updateOn: 'change'
      }],
      password: ['', {
        validators: [ Validators.required, Validators.minLength(8), validPasswordStrength() ],
        asyncValidators: [],
        updateOn: 'change'
      }]
    });
  }

  loginDeny = true;

  capsActive = false;

  onSubmit(){
    //TODO: HTTP Request Login
  }

  loginDenied(){
    return this.loginDeny;
  }
}
