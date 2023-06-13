import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validPasswordStrength } from '../forgot-password/customValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hidePassword = true;

  registerCreds: FormGroup;

  constructor(private fb: FormBuilder){
    this.registerCreds = this.fb.group({
      email: ['',
        {
          validators: [], //TODO: add validator 'has form of an email'
          asyncValidators: [], //TODO: add validator for e-mail is already taken
          updateOn: 'change'
        }
      ],
      username: ['', {
        validators: [ Validators.minLength(3), Validators.maxLength(12) ],
        asyncValidators: [], //TODO: add async validator for 'Username is already taken'
        updateOn: 'change'
      }],
      password: ['', {
        validators: [ Validators.required, Validators.minLength(8), validPasswordStrength() ],
        asyncValidators: [],
        updateOn: 'change'
      }]
    });
  }

  capsActive = false;

  onSubmit(){
    //TODO: HTTP Request Login
  }
}
