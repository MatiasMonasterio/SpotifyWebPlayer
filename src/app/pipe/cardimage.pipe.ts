import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardimage'
})
export class CardimagePipe implements PipeTransform {

  transform( images: Array<string> ): string {    
    if( images.length === 0 ) return 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'
    else return images[0]['url'];
  }

}
