import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

// Main Site Pages
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';

// Project Detail Pages
import { HugDetailComponent } from './portfolio/hug-detail/hug-detail.component';
import { HikeitDetailComponent } from './portfolio/hikeit-detail/hikeit-detail.component';
import { WeatherlyMaplyComponent } from './portfolio/weatherly-maply/weatherly-maply.component';


const APP_ROUTES: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio',
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full'},
      { path: 'all', component: PortfolioComponent },
      { path: 'hug-detail', component: HugDetailComponent },
      { path: 'hikeit-detail', component: HikeitDetailComponent },
      { path: 'weatherly-maply-detail', component: WeatherlyMaplyComponent }
    ]
  },
  { path: 'contact', component: ContactComponent},
  { path: 'skills', component: SkillsComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
