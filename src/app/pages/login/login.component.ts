import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private authService: AuthService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
   this.loginForm = this.fb.group({
     email: ['test@test.com', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(6)]]
   })
  }

  login() {

    const { email, password } = this.loginForm.value;

    this.authService.authenticate(email, btoa(password))
    .subscribe(data => {
      if (!!data) {
        localStorage.setItem('isAuthenticate', 'true');
        this.router.navigate(['/']);
      } else {
        localStorage.setItem('isAuthenticate', 'false');
      }
    })
  }


}
