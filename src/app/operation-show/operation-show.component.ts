import {Operations} from '../models/operations';
import {OperationServiceService} from '../services/operation-service.service';
import {Component, OnInit, Injectable} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-operation-show',
  templateUrl: './operation-show.component.html',
  styleUrls: ['./operation-show.component.css'],
  providers: [OperationServiceService],
})

@Injectable()
export class OperationShowComponent implements OnInit {
  
  
  
  nom: string;
  prenom: string;
  adresseline: string;
  codepostal: number;
  ville: string;
  telephone: string;
  soldeCC: number;
  soldeEp: number;
  
  addClientForm: FormGroup;
  
  constructor(private http: Http) {}
  

  
 
  
  ngOnInit() {
   // this.getOperations();
  }
  
    addClient(): Observable<any>  {
  console.log(`input1 ${this.addClientForm.value.nom}`);
  console.log(`input1 ${this.addClientForm.value.prenom}`);
      
      client c = new client(
        this.addClientForm.value.nom,
      this.addClientForm.value.prenom,
    this.addClientForm.value.adresseline,
  this.addClientForm.value.codepostal,
this.addClientForm.value.ville,
this.addClientForm.value.telephone,
this.addClientForm.value.soldeCC,
this.addClientForm.value.soldeEp
);

      return this.http.get('http://localhost:8080/ProxiBanqueV4_HS_NTH/clientPost',).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big pb!'));
      
//    console.log(`input2 ${this.numDepart}`);
//    console.log(`input3 ${this.numCible}`);

    //this.serviceOperation.addOperation(
//      new Operations(this.numDepart.value, this.numCible.value, 
//        this.montant.value, 'Virement', 0)).subscribe(data => 
//        {this.serviceOperation.getOperations(new Operations('', '', 0, "", 3));
//        });
  }
  
}
