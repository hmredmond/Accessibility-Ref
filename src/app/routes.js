import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LibraryComponent} from './aria/library/library';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes = [
  {
    path: '',
    component: LibraryComponent
  }
];

export const routing = RouterModule.forRoot(routes);
