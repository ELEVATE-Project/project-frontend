import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpService } from './core/services';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockHttpService: HttpService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [IonicModule.forRoot(),
          TranslateModule.forRoot(),],
          providers: [HttpService,
            HttpClient, HttpHandler,
            {
              provide: ActivatedRoute,
              useValue: {
                  snapshot: {
                      paramMap: {
                          get(): string {
                              return '123';
                          },
                      },
                  },
              },
          },
          ],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      mockHttpService = TestBed.inject(HttpService);
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
