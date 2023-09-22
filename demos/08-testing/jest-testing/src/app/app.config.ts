import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom([
            MarkdownModule.forRoot()
        ]),
    ],
};