export class Operations {
  nomClient: string;
  prenomClient: string;
  id: number;
  date: Date;
  idcomptedepart: number;
  idcomptecible: number;
  montant: number;
  etat: string;
  typeOper: string;
  numCompteDepart: string;
  numCompteCible: string;
  critere: number;
//  constructor(numCompteDepart: string, numCompteCible: string, montant: number) {
//
//    // this.date = date;
//    this.numCompteDepart = numCompteDepart;
//    this.numCompteCible = numCompteCible;
//    this.montant = montant;
//    // this.etat = etat;
//    // this.typeOper = type;
//  }
constructor(numDepart: string, numCible: string, montant: number, opetype: string, critere: number) {

    // this.date = date;
    this.numCompteDepart = numDepart;
    this.numCompteCible = numCible;
    this.montant = montant;
    // this.etat = etat;
    this.typeOper = opetype;
  this.critere = critere;
  }

}


