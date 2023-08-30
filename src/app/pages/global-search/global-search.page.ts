import { Component, OnInit } from '@angular/core';
import { urlConstants } from 'src/app/core/constants';
import { HttpService, ToastService } from 'src/app/core/services';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.page.html',
  styleUrls: ['./global-search.page.scss'],
})
export class GlobalSearchPage implements OnInit {

  searchResults: any[] = [];
  debounceTimer: any;
  currentPage = 1;
  limit = 2;

  constructor(
    private http: HttpService,
    private toast: ToastService,
    ) {}
  ngOnInit(): void {
    this.loadSearchResults("");
  }

  onSearch(event: any) {
    const query = event.target.value.trim();
    
    if (query.length >= 3) {
      this.currentPage = 1;

      // Debounce the API call to avoid frequent requests while typing
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.loadSearchResults(query);
      }, 300);
    }
  }

  async loadSearchResults(query: string) {
    const dynamicUrl = urlConstants.API_URLS.GLOBAL_SEARCH(this.currentPage, this.limit, query);
    const config = {
      url: dynamicUrl,
    };
    await this.http.setHeader();
    this.http.get(config).subscribe((data) => {
      if (data) {
        if(data.result == 0){
          this.toast.showToast('No Data found', 'success');
          return;
        }
        // Append new results to the existing list
        this.searchResults = data.result;
        
      }
    });
  }

}
