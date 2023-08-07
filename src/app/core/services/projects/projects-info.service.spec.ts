import { TestBed } from '@angular/core/testing';

import { ProjectsInfoService } from './projects-info.service';

describe('ProjectsInfoService', () => {
  let service: ProjectsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
