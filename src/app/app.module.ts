import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './home/top-nav/top-nav.component';
import { FooterComponent } from './home/footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Service Files
import { ProjectService } from './models/project.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
