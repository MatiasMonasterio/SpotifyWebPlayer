/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Path */
import { router } from './app.routing';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PlayerComponent } from './components/shared/player/player.component';
import { UsernavComponent } from './components/shared/usernav/usernav.component';
import { CardComponent } from './components/shared/card/card.component';
import { CardgroupComponent } from './components/shared/cardgroup/cardgroup.component';
import { SongsgroupComponent } from './components/shared/songsgroup/songsgroup.component';
import { SongComponent } from './components/shared/song/song.component';

/* Pipes */
import { CardtextPipe } from './pipe/cardtext.pipe';
import { CardimagePipe } from './pipe/cardimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    PlayerComponent,
    UsernavComponent,
    CardComponent,
    CardgroupComponent,
    SongsgroupComponent,
    SongComponent,
    CardtextPipe,
    CardimagePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( router, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
