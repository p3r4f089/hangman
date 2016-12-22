import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import {DASH_DECLARATIONS} from './dash';
import {HANGMAN_DECLARATIONS} from './hangman'
import {AUTH_DECLARATIONS} from "./auth";
import {SHARED_DECLARATIONS } from './shared';

import { AppComponent } from "./app.component.web";
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { MdButtonModule } from "@angular2-material/button";
import { MdToolbarModule } from "@angular2-material/toolbar";
import { MdInputModule } from "@angular2-material/input";
import { MdCardModule } from "@angular2-material/card";
import { MdCoreModule } from "@angular2-material/core";
import { MdCheckboxModule } from "@angular2-material/checkbox";
import { MdSidenavModule } from "@angular2-material/sidenav";
import {MdListModule} from "@angular2-material/list";
import {IonicModule, IonicApp} from "ionic-angular";


let moduleDefinition;

  moduleDefinition = {
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes),
      AccountsModule,
      MdCoreModule.forRoot(),
      MdButtonModule.forRoot(),
      MdToolbarModule.forRoot(),
      MdInputModule.forRoot(),
      MdCardModule.forRoot(),
      MdCheckboxModule.forRoot(),
      MdListModule.forRoot(),
      MdSidenavModule.forRoot()
    ],
    declarations: [
      AppComponent,
      ...DASH_DECLARATIONS,
      ...HANGMAN_DECLARATIONS,
      ...SHARED_DECLARATIONS,
      ...AUTH_DECLARATIONS

    ],
    providers: [
      ...ROUTES_PROVIDERS
    ],
    bootstrap: [
      AppComponent
    ]
  }


@NgModule(moduleDefinition)
export class AppModule {}
