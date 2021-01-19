import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'search', component: SearchComponent },
    { path: 'search/:value', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]