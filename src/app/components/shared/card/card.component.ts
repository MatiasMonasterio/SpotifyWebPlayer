import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() info: any;

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  redirectTo(): void {    
    if( this.info.type === 'artist' ) this.router.navigate(['/artist', this.info.id]);
  }

}
