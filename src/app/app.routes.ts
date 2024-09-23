import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PremiumpageComponent } from './premiumpage/premiumpage.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionlistComponent } from './collectionlist/collectionlist.component';
import { PlayerComponent } from './player/player.component';
import { AuthorsearchComponent } from './authorsearch/authorsearch.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'homepage',
        component:HomepageComponent
    },
    {
        path:'premiumpage',
        component:PremiumpageComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'collectionlist',
        component:CollectionlistComponent
    },
    {
        path:'player',
        component:PlayerComponent
    },
    {
        path:'authorsearch',
        component:AuthorsearchComponent
    }
];
