import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), TranslateModule.forRoot(), HttpClientModule  ],
      providers: [HttpService,
        HttpClient,
        HttpHandler
      ],
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
