import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';

const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'demos',
                loadChildren: () =>
                    import('../demos/demos.module').then((m) => m.DemosModule),
            },
            {
                path: 'skills',
                loadChildren: () =>
                    import('../skills/skills.module').then((m) => m.SkillsModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(MAIN_ROUTES)],
    exports: [RouterModule],
})
export class MainRoutingModule { }