import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { localKeys, urlConstants } from 'src/app/core/constants/';
import { HttpService, UserService, LocalStorageService, ToastService } from 'src/app/core/services/';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private httpService: HttpService,
    private localStorage: LocalStorageService,
    private _location: Location,
    private userService: UserService,
  ) { }
  async profileUpdate(formData:any, showToast=true) {
    const config = {
      url: urlConstants.API_URLS.PROFILE_UPDATE,
      payload: formData,
    };
    try {
      let data: any = await this.httpService.post(config);
      let userDetails = await this.localStorage.getLocalData(localKeys.USER_DETAILS);
      userDetails.user = null;
      let profileData = await this.getProfileDetailsAPI();
      await this.localStorage.setLocalData(localKeys.USER_DETAILS, JSON.stringify(profileData));
      this.userService.userEvent.next(profileData);
      this._location.back();
    }
    catch (error) {
    }
  }
  getProfileDetailsAPI() {
    const config = {
      url: urlConstants.API_URLS.PROFILE_DETAILS,
      payload: {}
    };
    return this.httpService.get(config).pipe(
      map((data:any)=>{
        data = _.get(data, 'result');
        this.localStorage.setLocalData(localKeys.USER_DETAILS, data);
        return data;
      })
    )
  }

  async profileDetails(showLoader = true): Promise<any> {
    //showLoader ? await this.loaderService.startLoader() : null;
    return new Promise((resolve) => {
      try {
        this.localStorage.getLocalData(localKeys.USER_DETAILS)
          .then(async (data) => {
            if (data) {
              //showLoader ? this.loaderService.stopLoader() : null;
              resolve(data);
            } else {
              this.getProfileDetailsAPI().subscribe((res)=>{
                this.localStorage.setLocalData(localKeys.USER_DETAILS, res);
                data = _.get(data, 'user');
                resolve(data);
              })
            }
          })
      } catch (error) {
       // showLoader ? this.loaderService.stopLoader() : showLoader;
      }
    });
  }

  async generateOtp(formData:any) {
    const config = {
      url: urlConstants.API_URLS.GENERATE_OTP,
      payload: formData
    };
    try {
      let data: any = await this.httpService.post(config);
      return data;
    }
    catch (error) {
    }
  }
  async updatePassword(formData:any) {
    const config = {
      url: urlConstants.API_URLS.RESET_PASSWORD,
      payload: formData
    };
    try {
      let data: any = await this.httpService.post(config);
      // to be used 
      // let authService = this.injector.get(AuthService);
      //let userData = authService.setUserInLocal(data);
      // return userData;
    }
    catch (error) {
    }
  }
  async registrationOtp(formData:any) {
    const config = {
      url: urlConstants.API_URLS.REGISTRATION_OTP,
      payload: formData
    };
    try {
      let data: any = await this.httpService.post(config);
      return data;
    }
    catch (error) {
    }
  }
  async shareProfile(id:any) {
    const config = {
      url: urlConstants.API_URLS.SHARE_MENTOR_PROFILE+id,
      payload: {}
    };
    try {
      let data = await this.httpService.get(config);
      let result = _.get(data, 'result');
      return result;
    }
    catch (error) {
      return false
    }
  }

  async getProfileDetailsFromAPI(isAMentor:any, id:any, showLoader=true){
    const config = {
      url: (isAMentor)?urlConstants.API_URLS.MENTOR_PROFILE_DETAILS+id:urlConstants.API_URLS.MENTEE_PROFILE_DETAILS+id,
      payload: {}
    };
    try {
      let data: any = await this.httpService.get(config);
      data = _.get(data, 'result');
      await this.localStorage.setLocalData(localKeys.USER_DETAILS, JSON.stringify(data));
      return data;
    }
    catch (error) {
    }
  }
}
