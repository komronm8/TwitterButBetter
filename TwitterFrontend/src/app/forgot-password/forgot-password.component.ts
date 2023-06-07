import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { validPasswordStrength, confirmPassword } from './customValidators';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  //FormGroup holding password and confirmPassword
  matchPw: FormGroup;
  errors = {
    password: null,
    confirmPassword: null
  };

  tooltipText = [
    "Your password must have:",
    " ",
    "minimum of 8 characters",
    "1 upper case letter",
    "1 lower case letter",
    "1 numeric letter"
  ].join("\n");

  hidePassword = true;
  hideRepeatPassword = true;
  password: string = '';

  constructor(private fb: FormBuilder){
    this.matchPw = this.fb.group({
      password: ['', {
        validators: [ Validators.required, Validators.minLength(8), validPasswordStrength() ],
        asyncValidators: [],
        updateOn: 'change'
      }],
      confirmPassword: ['', {
        validators: [ Validators.required, confirmPassword(this.password) ],
        asyncValidators: [],
        updateOn: 'change'
      }]
    });
  }

  passwordErrors(control: AbstractControl) {
    return control.hasError('required') || control.hasError('minength') || control.hasError('passwordStrength');
  }
  confirmErrors(control: AbstractControl){
    return control.hasError('notConfirmed');
  }

  onSubmit(){
    //TODO: Add HTTP-Request
  }
}
