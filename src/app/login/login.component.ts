import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isValidFormSubmitted = false;
  incorrect = false;

  user = new User();

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {

    this.login = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
    });



  }
  onFormSubmit() {
    if (this.login.controls['email'].value == 'test@mail.com' && this.login.controls['password'].value == 'testtest')
      this.router.navigate(['question-page']);
    else {
      this.login.reset();
      this.incorrect = true;
    }
  }


}
export class User {
  emailId?: string;
}
