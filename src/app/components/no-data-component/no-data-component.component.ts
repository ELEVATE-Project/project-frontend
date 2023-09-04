import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data-component',
  templateUrl: './no-data-component.component.html',
  styleUrls: ['./no-data-component.component.scss'],
})
export class NoDataComponentComponent  implements OnInit {

  @Input() message: string ="";
  constructor() { }

  ngOnInit() {}

}
