import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { delay, map, of } from 'rxjs';
import { BoxedDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BoxedDirective,
    AsyncPipe
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  fcDisplay = new FormControl(true);
  dogs = ["Flora", "Cleo", "Soi", "Giro"]
  loaded = of(false).pipe(
    delay(3000),
    map(() => true)
  );

  // ngOnInit() {
  //   setTimeout(() => {
  //     // this.loaded = true;
  //   }, 3000);
  // }

}
