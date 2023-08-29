import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { headerConfigKeys } from 'src/app/core/constants/';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  headerConfigKeys = headerConfigKeys;
  @Input()configHeader: any = {};
  @Output() actionEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  private title: any;
  
  performAction(action: any) {
    this.actionEmitter.emit(action);
  }

  ngOnInit() {}

}
