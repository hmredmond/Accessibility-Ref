import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {Codify} from './pipes/codify/codify';

import {ExpanderComponent} from './components/expander/expander';

import {LibraryComponent} from './aria/library/library';
import {RolesComponent} from './aria/roles/roles';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    RootComponent,
    ExpanderComponent,
    LibraryComponent,
    RolesComponent,
    Codify
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
