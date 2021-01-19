import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardgroup',
  templateUrl: './cardgroup.component.html',
  styles: [
  ]
})
export class CardgroupComponent implements OnInit {

  @Input() cardsInfo: any;

  constructor() { }

  ngOnInit(): void {    
  }

}
