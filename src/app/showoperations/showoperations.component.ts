import {Operations} from '../models/operations';
import { OperationServiceService } from '../services/operation-service.service';

import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-showoperations',
  templateUrl: './showoperations.component.html',
  styleUrls: ['./showoperations.component.css'],
  providers: [OperationServiceService],
})
export class ShowoperationsComponent implements OnInit {
  operations: Operations[];
  showoperationForm: FormGroup;
  
  critere: AbstractControl;

  constructor(private fb: FormBuilder, private serviceOperation: OperationServiceService) {
    this.showoperationForm = this.fb.group({
      'critere': ['', Validators.required],
    });

    this.critere = this.showoperationForm.controls['critere'];

  }

  
  getOperations() {
    console.log(`input critere ${this.showoperationForm.value.critere}`);
    this.serviceOperation.getOperations(new Operations('','',0,"",this.critere.value)).subscribe(data => this.operations = data,
      error => console.log('!!!!!!!!'));
  }

  ngOnInit() {
   // this.getOperations(operation: Operations);
  }

}
