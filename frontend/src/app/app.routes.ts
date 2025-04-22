import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'search/:searchTerm', component: HomeComponent},
    {path: 'tags/:tag', component: HomeComponent},
    {path: 'food/:id', component: FoodPageComponent}
];
