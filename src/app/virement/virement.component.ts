import {Operations} from '../models/operations';
import {OperationServiceService} from '../services/operation-service.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css'],
  providers: [OperationServiceService]
})
export class VirementComponent implements OnInit {

  operations: Operations[];
  numDepart: AbstractControl;
  numCible: AbstractControl;
  // dateOper: FormControl;
  montant: AbstractControl;
  virementForm: FormGroup;
  myForm: FormGroup;
  nom: AbstractControl;
  prenom: AbstractControl;

  onSubmit(value: string): void {
    console.log('you submitted value ', value);
  }

  constructor(private fb: FormBuilder, private serviceOperation: OperationServiceService) {
    this.myForm = fb.group({
      'nom': ['', Validators.required],
      'prenom': ['', Validators.required],

    });
    this.nom = this.myForm.controls['nom'];
    this.prenom = this.myForm.controls['prenom'];
    this.virementForm = this.fb.group({
      'numDepart': ['', Validators.required],
      'numCible': ['', Validators.required],
      'montant': ['', Validators.required]
    });


    this.numDepart = this.virementForm.controls['numDepart'];
    this.numCible = this.virementForm.controls['numCible'];
    // this.dateOper = this.fb.control('', Validators.required);
    this.montant = this.virementForm.controls['montant'];

  }
  ngOnInit() {
    this.getOperations
  }
  addOperation(operation: Operations) {
    // const ldapInformation = {login: this.loginForm.value.ldapLogin, password: this.loginForm.value.ldapPassword};}
    console.log(`input1 ${this.virementForm.value.numDepart}`);
    console.log(`input2 ${this.numDepart}`);
    console.log(`input3 ${this.numCible}`);

    this.serviceOperation.addOperation(new Operations(this.numDepart.value, this.numCible.value, this.montant.value, 'Virement', 0)).subscribe(data => {
      this.serviceOperation.getOperations(new Operations('', '', 0, "", 3));
    }
    );

    // location.reload();
    // return false;
  }
  getOperations() {
    this.serviceOperation.getOperations(new Operations('', '', 0, "", 3)).subscribe(data => this.operations = data,
      error => console.log('!!!!!!!!'));
  }
  getAllClientByName(nom){
    console.log(`nom a chercher ${this.nom}`);
    this.serviceOperation.getAllClientByName(this.nom.value)
  }
}

