import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalSearchPage } from './global-search.page';

describe('GlobalSearchPage', () => {
  let component: GlobalSearchPage;
  let fixture: ComponentFixture<GlobalSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GlobalSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
