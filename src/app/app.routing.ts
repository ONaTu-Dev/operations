/**
 * New typescript file
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { OperationShowComponent } from './operation-show/operation-show.component';
import { ShowoperationsComponent } from './showoperations/showoperations.component';
import { VersementComponent } from './versement/versement.component';
import { VirementComponent } from './virement/virement.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'showoperations', component: ShowoperationsComponent},
  {path: 'virement', component: VirementComponent},
  {path: 'versement', component: VersementComponent},
   {path: 'operation-show', component: OperationShowComponent},
   { path: 'login', component: LoginComponent }
   
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
