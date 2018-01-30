import {Operations} from '../models/operations';
import { OperationServiceService } from '../services/operation-service.service';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-showoperations',
  templateUrl: './showoperations.component.html',
  styleUrls: ['./showoperations.component.css'],
  providers: [OperationServiceService],
})
export class ShowoperationsComponent implements OnInit {
  operations: Operations[];

  constructor(private serviceOperation: OperationServiceService) {}
  getOperations() {
    this.serviceOperation.getOperations(new Operations('', '', 0, '', 3)).subscribe(data => this.operations = data,
      error => console.log('!!!!!!!!'));
  }

  ngOnInit() {
   // this.getOperations(operation: Operations);
  }

}
