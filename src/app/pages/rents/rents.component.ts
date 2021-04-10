import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests/requests.service';
import { RentModel } from '../../models/rents.model';


@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {

  rents: RentModel[];

  constructor( private requesService: RequestsService) { }

  ngOnInit(): void {
    this.requesService.getAllRequests()
      .subscribe(resp => this.rents = resp);
  }

}
