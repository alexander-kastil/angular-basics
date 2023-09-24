import { Component, OnInit } from '@angular/core';
import { uxButtonComponent } from '../ux-button/ux-button.component';
import { uxSplitComponent } from '../ux-split/ux-split.component';

@Component({
    selector: 'app-split-popup',
    templateUrl: './split-popup.component.html',
    styleUrls: ['./split-popup.component.scss'],
    standalone: true,
    imports: [uxSplitComponent, uxButtonComponent],
})
export class SplitPopupComponent implements OnInit {
  constructor() {}

  isDisabled = true;

  ngOnInit(): void {}
}
