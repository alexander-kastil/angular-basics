import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.scss'],
})
export class AttrBindingComponent {
  isDisabled = true;
  isHidden = false;

  toggleInput() {
    this.isDisabled = !this.isDisabled;
  }

  hideInput() {
    this.isHidden = !this.isHidden;
  }
}
