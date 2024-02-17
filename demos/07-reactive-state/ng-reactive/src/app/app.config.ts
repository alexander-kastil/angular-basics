import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, ENVIRONMENT_INITIALIZER, importProvidersFrom, inject, isDevMode } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { appState } from './state/app.state';
import { DefaultDataServiceConfig, provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './skills/state/skills.metadata';
import { SkillsEntityService } from './skills/state/skills-entity.service';
import { SkillsDataService } from './skills/state/skills-data.service';
import { skillDataServiceConfig } from './skills/state/skill-data.service.config';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),
        provideAnimations(),
        importProvidersFrom([
            MarkdownModule.forRoot(),
            MatSnackBarModule,
            MatDialogModule,
            provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            provideAuth(() => getAuth()),
        ]),
        provideStore(),
        provideState(appState),
        { provide: DefaultDataServiceConfig, useValue: skillDataServiceConfig },
        provideEntityData(entityConfig, withEffects()),
        // {
        //     provide: ENVIRONMENT_INITIALIZER,
        //     useValue() {
        //         const entityDataService = inject(SkillsEntityService);
        //         const skillDataService = inject(SkillsDataService);
        //         entityDataService.registerService('Skill', skillDataService);
        //     },
        //     multi: true,
        // },
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() , connectInZone: true})
    ],
};
