import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-responsive-screen',
  templateUrl: './responsive-screen.component.html',
  styleUrls: ['./responsive-screen.component.scss']
})
export class ResponsiveScreenComponent implements OnInit {
  breakpointObserver = inject(BreakpointObserver);
  matches = false;

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 960px)'])
      .subscribe((state: BreakpointState) => {
        this.matches = state.matches ? false : true;
      })
  }

  getClass() {
    return this.matches ? 'smallClass' : 'largeClass';
  }
}
