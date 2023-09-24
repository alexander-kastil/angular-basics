import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-boostrap',
    templateUrl: './boostrap.component.html',
    styleUrls: ['./boostrap.component.scss'],
    standalone: true,
    imports: [MatCardModule]
})
export class BoostrapComponent {
}
