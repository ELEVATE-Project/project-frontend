import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu-layout',
  templateUrl: './side-menu-layout.component.html',
  styleUrls: ['./side-menu-layout.component.scss'],
})
export class SideMenuLayoutComponent  implements OnInit {

  @Input() pageTitle: string = ""; 

  constructor(private navCtrl: NavController) {}

  @Input()configMenu: any = {};
  @Output() actionEmitter: EventEmitter<string> = new EventEmitter<string>();

  performAction(action: string) {
    this.actionEmitter.emit(action);
  }
  
  ngOnInit(): void {
    
  }
}
