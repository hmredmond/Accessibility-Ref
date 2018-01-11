import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Codify} from '../../pipes/codify/codify';

@Component({
  selector: 'Roles',
  template: require('./roles.html'),
  pipes: [Codify]
})
export class RolesComponent {
  constructor(http: Http) {
    http.get('./app/aria/roles/roles.json').subscribe(res => {
      this.roles = res.json();
    });
  }
}
