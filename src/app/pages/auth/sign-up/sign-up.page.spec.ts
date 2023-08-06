import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SignUpPage } from './sign-up.page';
import { HttpService } from 'src/app/core/services/http/http.service';
import { of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;
  let mockHttpService: HttpService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignUpPage],
        imports: [IonicModule.forRoot(), TranslateModule.forRoot(), HttpClientModule  ],
        providers: [HttpService,
          HttpClient
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SignUpPage);
      component = fixture.componentInstance;
      mockHttpService = TestBed.inject(HttpService);
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
