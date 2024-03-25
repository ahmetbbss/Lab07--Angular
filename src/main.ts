import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';

import {AppComponent} from '../app.component';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport()],
});


