import { Adresse } from "./adresse";
export class client {
   id: number;
   nom: string;
   prenom: string;
   motDePasse: string;
   login: string;
   email: string;
   idcons: number;
   adresse: Adresse;
   numCompteCourant: string;
   numCompteEpargne: string;
}