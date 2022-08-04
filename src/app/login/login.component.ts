import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../restaurants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users?: User[];
  hide = true;
  loginBoxFormGroup!: FormGroup;


  constructor(
    private fb: FormBuilder,
    public activatedrout: ActivatedRoute,
    public router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {this.loginBoxFormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  }
}
