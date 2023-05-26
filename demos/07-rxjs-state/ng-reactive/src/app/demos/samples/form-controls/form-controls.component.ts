import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {
  subsSearchterms: Subscription | null = null;
  searchterm = new FormControl<string | null>('');
  output = this.searchterm.valueChanges
    .pipe(
      debounceTime(750) // wait 750ms after each keystroke
      //operator 2
      //operator 3
    )
}
