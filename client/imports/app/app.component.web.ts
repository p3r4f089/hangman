import { Component } from '@angular/core';
import { Router } from '@angular/router';
import template from './app.component.web.html';
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
  selector: 'app',
  template
})
@InjectUser('user')
export class AppComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
    Meteor.logout();
  }
}
