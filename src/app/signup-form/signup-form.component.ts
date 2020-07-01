import { Component, OnInit } from '@angular/core';
import { User } from '../User';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  private user: User;

  dataForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]]
    })
  }

  //Metodos getter de taquigrafia para reemplar el dataForm.controls.name.invalid

  get name() { return this.dataForm.get('name') }

  get phone() { return this.dataForm.get('phone') }

  get email() { return this.dataForm.get('email') }

  onSubmit = () => {
    if (this.dataForm.valid) {
      this.user = this.dataForm.value;
      console.log(this.user)
    }
  }
}
