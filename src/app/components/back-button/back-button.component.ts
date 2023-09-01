import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { headerConfigKeys } from 'src/app/core/constants/';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent  implements OnInit {
  headerConfigKeys = headerConfigKeys;
  @Input() pageTitle: string = ""; 
  @Input()configBackButton: any = {};
  constructor(
    private navCtrl: NavController,
    private router: Router
    ) {}

  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    console.log(this.configBackButton);
  }

  edit(){
    this.router.navigateByUrl('/layout/create-project');
  }

}
