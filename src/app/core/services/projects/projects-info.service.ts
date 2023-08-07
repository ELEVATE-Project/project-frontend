import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from '../http/http.service';
import { LocalStorageService } from '../localStorage/localstorage.service';
import { ProfileService } from '../profile/profile.service';
import { ToastService } from '../toast/toast.service';
import { UserService } from '../user/user.service';
import { urlConstants } from '../../constants/urlConstants';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { RequestParams } from '../../interface/request-param';

@Injectable({
  providedIn: 'root'
})
export class ProjectsInfoService {

  constructor( private toast: ToastService,
    private localStorage: LocalStorageService,
    private httpService: HttpService,
    private router: Router,
    private userService: UserService,
    private profileService: ProfileService,
    private translate: TranslateService) { }


    getProject() {
      const requestParam: RequestParams = {
        url: urlConstants.API_URLS.GET_PROJECT,
        headers: new HttpHeaders(), // You can add headers if needed.
      };
      // Make the API call with the headers containing the bearer token
      return this.httpService.get(requestParam);
    }
}
