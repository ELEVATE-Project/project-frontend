import { Component, OnInit } from '@angular/core';
import { headerConfigKeys, urlConstants } from 'src/app/core/constants';
import { HttpService, ToastService } from 'src/app/core/services';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss'],
})
export class ProjectListingComponent  implements OnInit {

  searchResults: any[] = [];
  currentPage = 1;
  isLoading = false;
  debounceTimer: any;
  limit = 2;
  public title: string = 'GLOBAL_SEARCH.TITLE'
  selectedTab: any = 'createdByMe';
  searchTerm: any = "";
  type='project'

  constructor(
    private http: HttpService,
    private toast: ToastService,
    private utilsService: UtilService
    ) {}
  ngOnInit(): void {
    this.getProjects();
    this.utilsService.setHeaders({
      [headerConfigKeys.SHOW_ICON]: true,
      [headerConfigKeys.SHOW_MENU]: true,
      [headerConfigKeys.SHOW_SEARCH]: false,
      [headerConfigKeys.SHOW_NOTIFICATION]: false,
      [headerConfigKeys.SHOW_PROFILE]: true,
      })
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value.trim();
    
    if (this.searchTerm.length >= 3) {
      this.currentPage = 1;

      // Debounce the API call to avoid frequent requests while typing
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.getProjects();
      }, 300);
    }
  }

  async getProjects() {
    const dynamicUrl = urlConstants.API_URLS.HOME_PROJECTS('createdByMe');
    //const dynamicUrl = urlConstants.API_URLS.GLOBAL_SEARCH(this.currentPage, this.limit, this.searchTerm);
    const config = {
      url: dynamicUrl,
    };

    await this.http.setHeader();
    this.http.get(config).subscribe((data) => {
      this.isLoading = false;
      if (data) {
        if(data.result == 0){
          this.toast.showToast('No Data found', 'success');
          return;
        }
        // Append new results to the existing list
         this.searchResults = this.searchResults.concat(data.result);
        this.currentPage++;
        
      }
    });
  }


  loadData(event: any) {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.getProjects();
    if (event) {
      event.target.complete();
    }
  }
 

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
