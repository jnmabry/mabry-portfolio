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

//Node Pack Addons
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { SkillsComponent } from './skills/skills.component';
import { HugDetailComponent } from './portfolio/hug-detail/hug-detail.component';
import { HikeitDetailComponent } from './portfolio/hikeit-detail/hikeit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    HugDetailComponent,
    HikeitDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
