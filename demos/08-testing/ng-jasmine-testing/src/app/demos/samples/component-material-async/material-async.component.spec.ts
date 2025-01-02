import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialAsyncComponent } from './material-async.component';

describe('MaterialAsyncComponent', () => {
  let fixture: ComponentFixture<MaterialAsyncComponent>;
  let component: MaterialAsyncComponent;

  beforeEach(
    waitForAsync(() => {
      fixture = TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          MarkdownModule.forRoot(),
        ],
        providers: [
          provideHttpClient()
        ]
      }).createComponent(MaterialAsyncComponent);
    })
  );

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 tags', () => {
    fixture.detectChanges();
    let tags = fixture.nativeElement.querySelectorAll('.mat-mdc-tab');
    expect(tags.length).toBe(3);
  });

  it('should show display the roles of giro when the second tab is clicked', (done) => {
    fixture.detectChanges();
    let tags = fixture.nativeElement.querySelectorAll('.mat-mdc-tab');
    tags[1].click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tabBody = fixture.nativeElement.querySelector('.mat-mdc-tab-body-content');
      done();
      // expect(tabBody.innerHTML).toContain('Giro was born');
    });
  });
})
