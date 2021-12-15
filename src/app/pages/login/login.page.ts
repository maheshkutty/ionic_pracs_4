import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSubmitted = false;
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  loginPage = this.fb.group({
    email: ['', [Validators.required,Validators.pattern(this.emailRegex)]],
    password:['', Validators.required]
  })

  get errorControl() {
    return this.loginPage.controls;
  }

  get email()
  {
    return this.loginPage.get('email')
  }

  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
  }

  async postFeedback() {
    console.log(this.loginPage.value, this.errorControl)
    this.isSubmitted = true
    if (!this.loginPage.valid) {
      console.log('Please provide all the required values!')
      return false;
    }
    else
    {
      this.router.navigate(["/tabs/home"]);
    }
  }
}
