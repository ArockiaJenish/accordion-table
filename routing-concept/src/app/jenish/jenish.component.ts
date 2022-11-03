import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-jenish',
  templateUrl: './jenish.component.html',
  styleUrls: ['./jenish.component.scss']
})
export class JenishComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',Validators.required),
    password: new FormControl('')
  });

  //invalid: boolean = false;

  get email(){
    return this.loginForm.get('email');
  }

  ngOnInit(): void {
  }

}
