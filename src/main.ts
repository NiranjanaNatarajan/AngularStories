import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { defineCustomElements } from 'demo-stencil/loader';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // defineCustomElements(window);