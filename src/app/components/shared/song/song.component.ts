import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styles: [
  ]
})
export class SongComponent implements OnInit {

  @Input() track: any;
  @Input() index?: number;

  constructor() { }

  ngOnInit(): void { }

}
