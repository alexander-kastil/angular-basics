import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { adminGuard } from '../shared/auth/adminGuard';

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
                path: 'skills-old',
                redirectTo: 'skills',
            },
            {
                path: 'skills',
                loadChildren: () =>
                    import('../skills/skills.routes').then(
                        (m) => m.SKILL_ROUTES
                    ),
            },
            {
                path: 'statistics',
                loadChildren: () =>
                    import('../statistics/statistics.module').then(
                        (m) => m.StatisticsModule
                    ),
            },
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [adminGuard],
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(MAIN_ROUTES)],
    exports: [RouterModule],
})
export class MainRoutingModule { }