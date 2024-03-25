import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppComponent } from '../src/app/app.component':
bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport()],
});


