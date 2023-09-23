import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { appState } from './state/app.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideStore(),
        provideState(appState),
        importProvidersFrom([
            MarkdownModule.forRoot()
        ]),
    ],
};