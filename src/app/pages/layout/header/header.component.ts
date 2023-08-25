import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { SideMenuComponent } from 'src/app/components/index';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
   @Input()configHeaders: any = [];
   @Output() actionEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  private title: any;
  
  performAction(action: string) {
    this.actionEmitter.emit(action);
  }
  
  ngOnInit() {}

}
