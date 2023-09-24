import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthModule } from '../firebase-auth/firebase-auth.module';
import { FirebaseAuthInterceptor } from '../firebase-auth/firebase-auth.interceptor';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { DEMO_ROUTES } from './demo.routes';

@NgModule({
    imports: [
        RouterModule.forChild(DEMO_ROUTES),
        FirebaseAuthModule,
    ],
    providers: [
        LoadingService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FirebaseAuthInterceptor,
            multi: true,
        },
    ],
})
export class DemosModule { }
