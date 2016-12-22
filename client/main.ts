import 'angular2-meteor-polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';

import '../both/methods/users.methods';
import '../both/methods/words.methods';

Meteor.startup(() => {
  const platform = platformBrowserDynamic();
  platform.bootstrapModule(AppModule);
});
