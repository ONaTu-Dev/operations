import {Client} from '../model/client';
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceClientService} from '../service/service-client.service';

@Component({
  selector: 'app-vueclient',
  templateUrl: './vueclient.component.html',
  styleUrls: ['./vueclient.component.css'],
  providers: [ServiceClientService]
})
export class VueclientComponent implements OnInit {
  actualClient: Client;
  // @Input()
  id: number;


  constructor(route: ActivatedRoute, private serv: ServiceClientService) {
    route.params.subscribe(params => {this.id = params['id']; });
  }


  ngOnInit() {
    console.log('helllo ', this.id);
    this.GetClientById(this.id);

  }

  GetClientById(i: number) {

    this.serv.getClientByIndex(i).subscribe(data => this.actualClient = data,
      error => console.log('error in service'));

  }
  edit(str: string) {
    console.log('dans foo');
    this.actualClient.login = 'loginddd';
    let cl2 = new Client();
    cl2.nom = 'nom222';
    console.log('client dans edit   ' + cl2.nom);
    this.serv.create(cl2);
  }
}


