import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ForgetPasswordPage } from './forget-password.page';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ForgetPasswordPage', () => {
  let component: ForgetPasswordPage;
  let fixture: ComponentFixture<ForgetPasswordPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ForgetPasswordPage],
        imports: [IonicModule.forRoot(),
          TranslateModule.forRoot(),],
      }).compileComponents();

      fixture = TestBed.createComponent(ForgetPasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should disable the menu during initialization', () => {
  //   const menuCtrlSpy = spyOn(component.menuCtrl, 'enable');
  //   component.ngOnInit();
  //   expect(menuCtrlSpy).toHaveBeenCalledWith(false);
  // });
});
