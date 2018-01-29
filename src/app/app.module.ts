import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ShowoperationsComponent } from './showoperations/showoperations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OperationShowComponent } from './operation-show/operation-show.component';
import { VirementComponent } from './virement/virement.component';
import { VersementComponent } from './versement/versement.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowoperationsComponent,
    OperationShowComponent,
    VirementComponent,
    VersementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }