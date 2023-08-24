import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-side-nav-layout',
  templateUrl: './side-nav-layout.component.html',
  styleUrls: ['./side-nav-layout.component.scss'],
})
export class SideNavLayoutComponent  implements OnInit {

  @Input() pageTitle: string = ""; 

  constructor(private navCtrl: NavController,) {}

  @Input()configMenu: any = {};
  @Output() actionEmitter: EventEmitter<string> = new EventEmitter<string>();

  performAction(action: string) {
    this.actionEmitter.emit(action);
  }

  ngOnInit(): void {
    // console.log(this.configMenu);
  }

}
