import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardtext'
})
export class CardtextPipe implements PipeTransform {

  transform( cardInfo: any): string {    
    if( cardInfo.type === 'playlist') {
      if( cardInfo.description ) return cardInfo.description;
      else return `De ${cardInfo.owner.display_name}`
    }
    if( cardInfo.type === 'album' ) return cardInfo.artists[0].name;
    if( cardInfo.type == 'artist' ) return 'Artist';
  }

}
