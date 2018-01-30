import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ShowoperationsComponent } from './showoperations/showoperations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OperationShowComponent } from './operation-show/operation-show.component';
import { VirementComponent } from './virement/virement.component';
import { VersementComponent } from './versement/versement.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LigneclientComponent } from './ligneclient/ligneclient.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListeClComponent } from './liste-cl/liste-cl.component';
import { VueclientComponent } from './vueclient/vueclient.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowoperationsComponent,
    OperationShowComponent,
    VirementComponent,
    VersementComponent,
    LoginComponent,
    LigneclientComponent,
    ListClientComponent,
    ListeClComponent,
    VueclientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
