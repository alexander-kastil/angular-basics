import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FirebaseAuthService } from '../../../fbauth/firebase-auth.service';
import { environment } from '../../../../environments/environment';
import { map, catchError } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgIf, JsonPipe } from '@angular/common';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-protected-api',
    templateUrl: './protected-api.component.html',
    styleUrls: ['./protected-api.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        NgIf,
        MatCardModule,
        MatButtonModule,
        JsonPipe,
    ],
})
export class ProtectedApiComponent implements OnInit {
  http = inject(HttpClient);
  as = inject(FirebaseAuthService);
  currentUser: firebase.default.User | null = null;
  resp: any;

  ngOnInit() {
    this.as.getUser().subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  callCoreApi() {
    this.http
      .get(`${environment.netapi}demo`)
      .pipe(
        map((data) => {
          this.resp = data;
        }),
        catchError((err) => {
          this.resp = err;
          return err;
        })
      )
      .subscribe();
  }
}
