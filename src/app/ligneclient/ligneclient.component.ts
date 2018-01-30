import {Client} from '../model/client';
import {ServiceClientService} from '../service/service-client.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ligneclient',
  templateUrl: './ligneclient.component.html',
  styleUrls: ['./ligneclient.component.css'],
  providers: [ServiceClientService]
})
export class LigneclientComponent implements OnInit {

  @Input()
  id: number;
  cl: Client;
  constructor(private service: ServiceClientService) {

  }
  getClientById(i: number) {
    this.service.getClientByIndex(i).subscribe(data => this.cl = data,
      error => console.log('error in service'));

  }
  ngOnInit() {
    // console.log(this.getClientById(this.id));
    this.getClientById(this.id);
    // this.cl=this.getClientById(1);
  }

}


