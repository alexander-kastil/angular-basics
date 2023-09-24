import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  title = 'About Templated Components';
  theValue = 100;

  doDouble() {
    return this.theValue * 2;
  }
}
