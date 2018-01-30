
import { Operations } from '../models/operations';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OperationServiceService {

constructor(private http: Http) {}
  getOperations(operation: Operations): Observable<any> {
    return this.http.post('http://localhost:8080/ProxiBanqueV4_HS_NTH/operations', operation).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big pb!'));
  }
  addOperation(operation: Operations): Observable<any> {

//    let cpHeaders = new Headers({'Content-Type': 'application/json'});
//    let options = new RequestOptions({headers: cpHeaders});
    console.log(`input typpppppppeope ${operation.typeOper}`);
    return this.http.post('http://localhost:8080/ProxiBanqueV4_HS_NTH/operationsPost', operation).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big pb!'));
  }
  
  getAllClientByName(nom: string): Observable<any>{
    return this.http.get('http://localhost:8080/ProxiBanqueV4_HS_NTH/clientsNom').map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big pb!'));
  }
  

}
