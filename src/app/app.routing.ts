import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';

// Main Site Pages
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const APP_ROUTES: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
