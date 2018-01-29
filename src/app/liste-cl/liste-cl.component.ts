import {Client} from '../model/client';
import {ServiceClientService} from '../service/service-client.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-liste-cl',
  templateUrl: './liste-cl.component.html',
  styleUrls: ['./liste-cl.component.css'],
  providers: [ServiceClientService]
})


export class ListeClComponent implements OnInit {
  clients: Client[];


  constructor(private service: ServiceClientService) {

  }
  getClient() {
    this.service.getClients().subscribe(data => this.clients = data,
      error => console.log('error in service'));
  }
  ngOnInit() {
    console.log(this.getClient());
    this.getClient();
  }


}



}
