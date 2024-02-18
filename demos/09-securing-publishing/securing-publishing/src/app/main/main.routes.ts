import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { firebaseAuthGuard } from '../firebase-auth/firebase.auth.guard';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'demos',
                loadChildren: () =>
                    import('../demos/demo.routes').then((m) => m.DEMO_ROUTES),
            },
            {
                path: 'skills',
                loadChildren: () =>
                    import('../skills/skills.routes').then(
                        (m) => m.SKILL_ROUTES
                    ),
                canActivate: [firebaseAuthGuard]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(MAIN_ROUTES)],
    exports: [RouterModule],
})
export class MainRoutingModule { }