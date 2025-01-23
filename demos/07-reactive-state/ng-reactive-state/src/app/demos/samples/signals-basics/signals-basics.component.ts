import {
  Component,
  Injector,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import {
  BorderDirective,
  CenteredDirective,
} from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { Topic } from './topic.model';
@Component({
  selector: 'app-signals-basics',
  templateUrl: './signals-basics.component.html',
  styleUrls: ['./signals-basics.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton,
    BorderDirective,
    CenteredDirective,
  ],
})
export class SignalsBasicsComponent {
  injector = inject(Injector);

  netAmount = signal<number>(0);
  myString = signal('Hello World');
  topic = signal<Topic>({ name: 'Angular Signals', likes: 0 });

  tax = signal(0.2).asReadonly();
  grossAmount = computed(() => this.netAmount() * (1 + this.tax()));

  handleChanges = effect(() => {
    console.log('totalAmount changed', this.netAmount());
    console.log('grossAmount changed', this.grossAmount());
  });

  // constructor() {
  //   effect(() => {
  //     console.log('totalAmount changed', this.netAmount());
  //     console.log('grossAmount changed', this.grossAmount());
  //   });
  // }

  logLikes() {
    effect(
      () => {
        console.log('there was a like', this.topic());
      },
      { injector: this.injector }
    );
  }

  updateAmount() {
    this.netAmount.set(100);
  }

  addAmount() {
    this.netAmount.update((curr) => curr + 10);
  }

  likeTopic() {
    this.topic.update((curr) => {
      curr.likes++;
      return curr;
    });
  }
}
