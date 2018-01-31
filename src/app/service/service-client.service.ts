import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Client} from '../model/client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import {Data} from '@angular/router';

@Injectable()
export class ServiceClientService {

  private readonly URLClient = 'http://localhost:8080/ProxiBanqueV4_HS_NTH/clientPost';

  constructor(private http: Http) {}

  getClients(): Observable<any> {

    return this.http.get('http://localhost:8080/ProxiBanqueV4_HS_NTH/clients').
      map((res: Response) => res.json()).
      catch((error: any) => Observable.throw('Pb JSON'));
  }
  getClientByIndex(i: number): Observable<any> {

    console.log('dans getclientbyId service', i);
    return this.http.get(`http://localhost:8080/ProxiBanqueV4_HS_NTH/clients/${i}`).
      map((res: Response) => res.json()).
      catch((error: any) => Observable.throw('Pb JSON'));
  }
  //
  //  editClientById(i: number): Observable<any> {
  //    console.log('dans editclientbyId service', i);
  //    //    return this.http.get(`http://localhost:8080/ProxiBanqueV4_HS_NTH/clients/${i}`).
  //    //      map((res: Response) => res.json()).
  //    //      catch((error: any) => Observable.throw('Pb JSON'));
  //
  //
  //  }
  //  }



  //  create(client: Client): Observable<Client> {
  ////    //    return this.httpClient.post<Client>(this.URLClient, client)
  //    //      .map((res: Response) => res.json())
  //    //      .catch((error: any) => Observable.throw('Big prrrooolllllb !'));
  //    let headers = new Headers(); headers.append('content-type', 'application/json');
  //
  //    //   this.http.post(this.URLClient, client, { headers: headers }).subscribe(res => {console.log('dddddd');}); }
  //    return this.http.post(this.URLClient, content, {headers: headers}).map(res => res.json()).subscribe(data => {console.log(data);},
  //      err => {console.log(err);}
  //    );
// }
//  getContent() {
//    const url = '<API URL>';
//    return this.http.post(url, Data)
//      .map((res: Response) => {
//        console.log('http content', res);
//      });
//
//
//    return this.httpClient.post(url, data, {observe: 'response'})
//      .map((res: HttpResponse<any>) => {
//        console.log('httpClient content', res);
//      });
//  }



//   saveClient(cl: Client){
//    const headers = new Headers({'Content-type': 'application/json'});
//    return this.http.post('http://localhost:8000/ProxiBanqueV3b/', cl, {headers: headers});
// }


create(client: Client)  {
  return this.http.put('http://localhost:3000/articles/' + client.id, client);
//  return this.httpClient.put<Article>(`http://localhost:3000/articles/${article.id}`, article);
}




}


