import {Client} from '../model/client';
import {Adresse} from '../model/adresse';
import {ServiceClientService} from '../service/service-client.service';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
  providers: [ServiceClientService]
})
export class ListClientComponent implements OnInit {
  clients: Client[];


  constructor(private service: ServiceClientService) {

  }
  getClient() {
    this.service.getClients().subscribe(data => this.clients = data,
      error => console.log('error in service'));
  }
  ngOnInit() {
    this.getClient();
  }

}



