import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from '../../services/requests/requests.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requestForm: FormGroup;

  constructor( private fb: FormBuilder, private requestService: RequestsService ) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      location: [ '', [Validators.required]],
      arrived: ['', [Validators.required]],
      departed: ['', [Validators.required]],
      passagers: ['', [Validators.required]],
    });
  }

  saveRequest() {
    this.requestService.saveRequest(this.requestForm.value)
      .subscribe( () => {
        alert('Usuario registrado correctamente.')
        this.requestForm.reset();
      })
  }

}
