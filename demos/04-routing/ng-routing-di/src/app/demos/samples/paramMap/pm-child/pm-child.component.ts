import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-pm-child',
  templateUrl: './pm-child.component.html',
  styleUrls: ['./pm-child.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class PmChildComponent implements OnInit {
  route = inject(ActivatedRoute);
  id: number = 0;
  readonly: boolean = false;

  ngOnInit() {
    this.useSnapShot();
    // this.useParamMap();
  }

  useSnapShot() {
    // Notice bug when using snapshot
    this.id = this.route.snapshot.params['id'];
  }

  useParamMap() {
    this.route.paramMap.subscribe((params) => {
      console.log('paramMap:', params);
    });

    this.route.queryParamMap.subscribe((qpm) => {
      console.log('paramMap:', qpm);
      this.readonly = qpm.get('readonly') === 'true';
    });
  }
}
