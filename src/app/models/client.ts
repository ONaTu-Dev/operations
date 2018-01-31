import { Adresse } from './adresse';
export class Client {
   id: number;
   nom: string;
   prenom: string;
   motDePasse: string;
   login: string;
   email: string;
   idcons: number;
   adresse: Adresse;
  telephone: string;
//   numCompteCourant: string;
//   numCompteEpargne: string;
   soldeCC: string;
   soldeEp: string;
}


// id":8,"nom":"Porman","prenom":"Nath","motDePasse":null,"login":null,"email":null," +
//  ""adresse":{"adresse":"2 rue General","codePostal":75012,"ville":"Paris 12"," +
//  ""telephone":"016732904"},"numCompteCourant":null,"numCompteEpargne":null," +
//  ""soldeCC":265.55,"soldeEp":400.0}
