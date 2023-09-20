import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent {
  sub$: Subject<number> = new Subject<number>();
  bs$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  runSubjectInit() {
    this.sub$.next(0);
    this.sub$.next(5);
    this.sub$.subscribe((val) => console.log('Subscriber A: ', val));
    this.sub$.subscribe((val) => console.log('Subscriber B: ', val));
    this.sub$.next(10);
  }

  runBSubjectInit() {
    this.bs$.next(0);
    this.bs$.next(5);
    this.bs$.subscribe((val) => console.log('BS Subscriber A: ', val));
    this.bs$.subscribe((val) => console.log('BS Subscriber B: ', val));
    this.bs$.next(10);
  }

  emitNext() {
    console.log('adding another subscriber');
    this.sub$.subscribe((val) => console.log('Late Subscriber', val));
    console.log('emitting a new value');
    this.sub$.next(20);
  }

  emitNextBS() {
    console.log('adding another subscriber');
    this.bs$.subscribe((val) => console.log('Late Subscriber', val));
    console.log('emitting a new value');
    this.bs$.next(20);
  }
}
