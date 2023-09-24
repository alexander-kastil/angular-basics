import { Component } from '@angular/core';
import { CapitalizeDirective } from './capitalize.directive';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        CapitalizeDirective
    ]
})
export class DirectiveComponent { }
