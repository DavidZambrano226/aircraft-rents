import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  users: UserModel[];
  roles: any;
  activeUpdate = false;

  constructor( private fb: FormBuilder, private userService: UsersService ) { }

  ngOnInit(): void {
    this.getAllUsersAndRoles();
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    })
  }

  getAllUsersAndRoles() {
    let subs = [
      this.userService.getAllUsers(),
      this.userService.getRoles()
    ]
    forkJoin(subs).subscribe( (resp:any) => {
      this.users = resp[0];
      this.roles = resp[1];
    })
  }

  editUser( user: UserModel ) {
    this.activeUpdate = true;
    this.userForm.patchValue({
      email: user.email,
      role: user.role
    })
  }

  saveUser() {
    this.userService.saveUser(this.userForm.value)
      .subscribe( () => {
        this.userForm.reset();
        this.getAllUsersAndRoles();
      })
  }

  updateUser() {
    this.userService.updateUser(this.userForm.value, 1)
      .subscribe( () => {
        this.activeUpdate = false;
        this.userForm.reset();
        this.getAllUsersAndRoles();
      })
  }

}
