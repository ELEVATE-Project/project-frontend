import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestParams } from '../../interface/request-param';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash-es';
import { catchError, map } from 'rxjs/operators'
import { localKeys, urlConstants } from 'src/app/core/constants/';
import { UserService, LocalStorageService, ToastService } from 'src/app/core/services/';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl;
  private timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  httpHeaders: any;
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private toast: ToastService,
    private translate: TranslateService
  ) {
    this.baseUrl = environment.baseUrl;
  }

  async setHeader(lang?:string): Promise<any> {
    return new Promise(async (resolve) => {
      try {
        let userToken = (await this.userService.getUserValue()) ? 'bearer ' + (await this.userService.getUserValue()).access_token : '';
        const headers = {
          'X-auth-token': userToken ? userToken : '',
          'Content-Type': 'application/json',
          'timeZone': this.timeZone,
          'accept-language': lang ? lang : 'en'
        };
        this.httpHeaders = headers;
        resolve(true)
      } catch (error) {
      }
    });
  }

  post(requestParam: RequestParams) {
    // to be used for network check
    // if (!this.checkNetworkAvailability()) {
    //   throw Error(null);
    // }
    // const headers = requestParam.headers ? requestParam.headers : await this.setHeaders();
    let body = requestParam.payload ? requestParam.payload : {};
    // this.http.setDataSerializer('json');
    // this.http.setRequestTimeout(60);
    console.log(this.baseUrl + requestParam.url, body)
    return this.http.post(this.baseUrl + requestParam.url, body, {headers: this.httpHeaders}).pipe(
      map((data:any)=>{
      if (data.responseCode === "OK") {
        return data;
      }
    }),
    catchError((err) => {
      this.handleError(err);    //Rethrow it back to component
      throw Error(err);
    }))
  }

  postBeforeAuth(requestParam: RequestParams) {
    // to be used for network check
    // if (!this.checkNetworkAvailability()) {
    //   throw Error(null);
    // }
    let body = requestParam.payload ? requestParam.payload : {};
    console.log(this.baseUrl + requestParam.url, body)
    return this.http.post(this.baseUrl + requestParam.url, body, {headers: this.httpHeaders}).pipe(
      map((data:any)=>{
      if (data.responseCode === "OK") {
        return data;
      }
    }),
    catchError((err) => {
      this.handleError(err);    //Rethrow it back to component
      throw Error(err);
    }))
  }

  get(requestParam: RequestParams) {
    // to be used for network check
    // if (!this.checkNetworkAvailability()) {
    //   throw Error(null);
    // }
    // const headers = requestParam.headers ? requestParam.headers : await this.setHeaders();
    // this.http.setDataSerializer('json');
    // this.http.setRequestTimeout(60);
    return this.http.get(`${this.baseUrl}${requestParam.url}`, {headers: requestParam.headers}).pipe(
      map((data:any)=>{
        if (data.status === 200) {
          return data;
        }
      })
      )
  }

  delete(requestParam: RequestParams) {
    // to be used for network check
    // if (!this.checkNetworkAvailability()) {
    //   throw Error(null);
    // }
    // const headers = requestParam.headers ? requestParam.headers : await this.setHeaders();
    // this.http.setDataSerializer('json');
    // this.http.setRequestTimeout(60);
    return this.http.delete(this.baseUrl + requestParam.url, {headers: this.httpHeaders}).subscribe((data)=>{
    })
  }

  // to be used for network check and tokens
  //network check
  // checkNetworkAvailability() {
  //   if (!this.network.isNetworkAvailable) {
  //     this.toastService.showToast('MSG_PLEASE_NETWORK', 'danger')
  //     return false;
  //   } else {
  //   return true;
  //   }
  // }

  //token validation and logout 

  // async getToken() {
  //   let token = _.get(this.userService.token, 'access_token');
  //   if (!token) {
  //     return null;
  //   }
  //   let isValidToken = this.userService.validateToken(token);
  //   if (!isValidToken) {
  //     let data: any = await this.getAccessToken();
  //     let access_token = _.get(data, 'access_token');
  //     if (!access_token) {
  //       let authService = this.injector.get(AuthService);
  //       authService.logoutAccount();
  //     }
  //     this.userService.token['access_token'] = access_token;
  //     this.localStorage.setLocalData(localKeys.TOKEN, JSON.stringify(this.userService.token));
  //   }
  //   let userToken = 'bearer ' + _.get(this.userService.token, 'access_token');
  //   return userToken;
  // }

  async getAccessToken() {
    const config = {
      url: urlConstants.API_URLS.REFRESH_TOKEN,
      payload: {
        refreshToken: _.get(this.userService.token, 'refresh_token')
      },
      headers: {}
    };
    try {
      let data: any = await this.post(config);
      let result = data.result;
      return result;
    }
    catch (error) {
    }
  }

  public handleError(result:any) {
    console.log(result);
    let msg = result.error;
    switch (result.status) {
      case 400:
      case 406:
      case 422:
        this.toast.showToast(msg ? msg.message : 'SOMETHING_WENT_WRONG', 'danger')
        break
      case 401:
        break
      default:
        this.toast.showToast(msg ? msg.message : 'SOMETHING_WENT_WRONG', 'danger')
    }
  }
}
