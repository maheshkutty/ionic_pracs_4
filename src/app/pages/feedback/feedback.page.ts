import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  isSubmitted = false;
  feedbackForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.pattern(this.emailRegex)]],
    ename: ['', [Validators.required]],
    rate: ['', [Validators.required]],
    comments: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get errorControl() {
    return this.feedbackForm.controls;
  }

  get email()
  {
    return this.feedbackForm.get('email')
  }

  async postFeedback() {
    console.log(this.feedbackForm.value, this.errorControl)
    this.isSubmitted = true
    if (!this.feedbackForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    }
  }
}
