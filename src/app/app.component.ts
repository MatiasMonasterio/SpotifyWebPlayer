import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  @ViewChild('mainContainer') mainContainer: ElementRef;

  constructor() {
    this.title = 'SpotiApp';
    this.heightFixed();
    this.windowsSizeing();
  }

  windowsSizeing(): void {
    window.addEventListener( 'resize', this.heightFixed );
  }

  heightFixed(): void {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', `${window.innerHeight}px`);
  }

  scrollAnimation(e: Event): void {
    if(( <HTMLElement>e.target ).scrollTop > 25) {
      this.mainContainer.nativeElement.classList.add('scrolled');
    }
    else this.mainContainer.nativeElement.classList.remove('scrolled');
  }

}
