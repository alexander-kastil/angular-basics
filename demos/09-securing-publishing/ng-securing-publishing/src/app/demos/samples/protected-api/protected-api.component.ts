import { JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { catchError, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FirebaseAuthService } from '../../../firebase-auth/firebase-auth.service';
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
  currentUser: any | null = null;
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
