import { TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpService } from '../http/http.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), TranslateModule.forRoot(), HttpClientModule  ],
      providers: [HttpService,
        HttpClient,
        HttpHandler
      ],
    });
    service = TestBed.inject(ProfileService);
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
})

