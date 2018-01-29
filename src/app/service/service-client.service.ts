import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client';
import 'rxjs/Rx';

@Injectable()
export class ServiceClientService {


  constructor(private http: Http) {}

  getClients(): Observable<any> {

    return this.http.get('http://localhost:8080/ProxiBanqueV3b/clients').
      map((res: Response) => res.json()).
      catch((error: any) => Observable.throw('Pb JSON'));
  }
  getClientByIndex(i: number): Observable<any> {

    console.log('dans getclientbyId service', i);
    return this.http.get(`http://localhost:8080/ProxiBanqueV3b/clients/${i}`).
      map((res: Response) => res.json()).
      catch((error: any) => Observable.throw('Pb JSON'));
  }

  editClientById(i: number): Observable<any> {
    console.log('dans editclientbyId service', i);
    return this.http.get(`http://localhost:8080/ProxiBanqueV3b/clients/${i}`).
      map((res: Response) => res.json()).
      catch((error: any) => Observable.throw('Pb JSON'));
  }



  create(data: Client): Observable<any> {
    let url: string = 'http://localhost:8000/ProxiBanqueV3b/addClient';
    return this.http.post(url, data)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.message));
  }


  //   saveClient(cl: Client){
  //    const headers = new Headers({'Content-type': 'application/json'});
  //    return this.http.post('http://localhost:8000/ProxiBanqueV3b/', cl, {headers: headers});
/ }

}


