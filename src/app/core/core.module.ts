import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageModule } from './store/store.module';
import { environment } from '../../environments/environment';
import { API_URL, FINAM_URL } from './tokens/base-url.token';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';
import { ApiModule, Configuration, ConfigurationParameters } from './api';

export function apiParams(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiUrl,
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [],
  imports: [CommonModule, StorageModule, ApiModule.forRoot(apiParams)],
  providers: [
    { provide: API_URL, useValue: environment.apiUrl },
    { provide: FINAM_URL, useValue: environment.finamUrl },
    // { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RetryInterceptor,
    //   multi: true,
    // },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
})
export class CoreModule {}
