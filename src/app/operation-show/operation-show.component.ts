import {Operations} from '../models/operations';
import {OperationServiceService} from '../services/operation-service.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-operation-show',
  templateUrl: './operation-show.component.html',
  styleUrls: ['./operation-show.component.css'],
  providers: [OperationServiceService],
})
export class OperationShowComponent implements OnInit {

  operations: Operations[];
  critere: number;

  constructor(private serviceOperation: OperationServiceService) {}
  getOperations(critere: HTMLInputElement) {
   
    this.serviceOperation.getOperations(new Operations('','',0,"",this.critere)).subscribe(data => this.operations = data,
      error => console.log('!!!!!!!!'));
  }

  ngOnInit() {
   // this.getOperations();
  }




}
