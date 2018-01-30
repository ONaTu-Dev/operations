import {Operations} from '../models/operations';
import { OperationServiceService } from '../services/operation-service.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-versement',
  templateUrl: './versement.component.html',
  styleUrls: ['./versement.component.css'],
  providers: [OperationServiceService]
})
export class VersementComponent implements OnInit {

operations: Operations[];

  numDepart: AbstractControl;
  numCible: AbstractControl;
  montant: AbstractControl;

  versementForm: FormGroup;

  constructor(private fb: FormBuilder, private serviceOperation: OperationServiceService) {
    this.versementForm = this.fb.group({
      'numCible': ['', Validators.required],
      'montant': ['', Validators.required]
    });

    this.numCible = this.versementForm.controls['numCible'];
    this.montant = this.versementForm.controls['montant'];

  }
  ngOnInit() {
    this.getOperations}
  addOperation(operation: Operations) {
    // const ldapInformation = {login: this.loginForm.value.ldapLogin, password: this.loginForm.value.ldapPassword};}
    console.log(`input1 ${this.versementForm.value.numDepart}`);
    console.log(`input3 ${this.numCible.value}`);

    this.serviceOperation.addOperation(new Operations('',this.numCible.value, this.montant.value,'Versement',0)).subscribe(data => {
      this.serviceOperation.getOperations(new Operations('','',0,"",3));
    }
    );

    // location.reload();
    // return false;
  }
  getOperations() {
    this.serviceOperation.getOperations(new Operations('','',0,"",3)).subscribe(data => this.operations = data,
      error => console.log('!!!!!!!!'));
  }
}
