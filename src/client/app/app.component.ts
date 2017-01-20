import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(public af: AngularFire) {
    console.log('Environment config', Config);
    //this.af.auth.subscribe(auth => console.log(auth));
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }
}
