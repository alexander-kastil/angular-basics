import { fakeAsync, flush, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentWriteComponent } from './component-write.component';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ComponentWriteComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCardModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ComponentWriteComponent],
    });
  });

  it('should be display the written Value', fakeAsync(() => {
    const whippet = 'Soi the Whippet';
    const giro = 'Giro the Hunter from Spain';
    const fixture = TestBed.createComponent(ComponentWriteComponent);
    fixture.autoDetectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;
    flush();
    expect(el.value).toBe(giro);

    el.value = whippet;
    el.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.user.username).toBe(whippet);
  })
  );
});
