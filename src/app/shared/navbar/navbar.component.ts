import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  role: string;

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if( localStorage.getItem('role')) {
      this.role = localStorage.getItem('role');
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
