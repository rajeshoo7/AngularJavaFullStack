import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { HardCodedAuthenticationService } from './service/hard-coded-authentication.service';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};
