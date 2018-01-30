/**
 * New typescript file
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LigneclientComponent } from './ligneclient/ligneclient.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListeClComponent } from './liste-cl/liste-cl.component';
import { OperationShowComponent } from './operation-show/operation-show.component';
import { ShowoperationsComponent } from './showoperations/showoperations.component';
import { VersementComponent } from './versement/versement.component';
import { VirementComponent } from './virement/virement.component';
import { LoginComponent } from './login/login.component';
import { VueclientComponent } from './vueclient/vueclient.component';

const appRoutes: Routes = [
  {path: 'showoperations', component: ShowoperationsComponent},
  {path: 'virement', component: VirementComponent},
  {path: 'versement', component: VersementComponent},
  {path: 'operation-show', component: OperationShowComponent},
  {path: 'listClient', component: ListClientComponent},
  {path: 'list-Cl2', component: ListeClComponent},
  {path: 'login', component: LoginComponent },
  {path: 'client', component: VueclientComponent },
  {path: 'vueclient', component: VueclientComponent },
  {path: 'ligneclient', component: LigneclientComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
