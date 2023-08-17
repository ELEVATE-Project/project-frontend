import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProjectsPage } from './create-projects.page';

describe('CreateProjectsPage', () => {
  let component: CreateProjectsPage;
  let fixture: ComponentFixture<CreateProjectsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
