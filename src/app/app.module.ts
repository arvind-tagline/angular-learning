import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './Task-2-Tagline/header/header.component';
import { FooterComponent } from './Task-2-Tagline/footer/footer.component';
import { BackgroundImgComponent } from './Task-2-Tagline/background-img/background-img.component';
import { CardComponent } from './Task-2-Tagline/card/card.component';
import { BtnComponent } from './Task-2-Tagline/btn/btn.component';
import { TechnologyComponent } from './Task-2-Tagline/technology/technology.component';
import { ExperienceComponent } from './Task-2-Tagline/experience/experience.component';
import { ClutchComponent } from './Task-2-Tagline/clutch/clutch.component';
import { ReviewsComponent } from './Task-2-Tagline/reviews/reviews.component';
import { StarsComponent } from './Task-2-Tagline/stars/stars.component';
import { VerifiedreviewsComponent } from './Task-2-Tagline/verifiedreviews/verifiedreviews.component';
import { ClientsComponent } from './Task-2-Tagline/clients/clients.component';
import { HeardersComponent } from './Task-2-Tagline/hearders/hearders.component';
import { TitleComponent } from './Task-2-Tagline/title/title.component';
import { Title2Component } from './Task-2-Tagline/title2/title2.component';
import { CardTextComponent } from './Task-2-Tagline/reviews/card-text/card-text.component';
import { SlideComponent } from './Task-2-Tagline/slide/slide.component';
import { SlideImgComponent } from './Task-2-Tagline/slide/slide-img/slide-img.component';
import { ContactComponent } from './Task-2-Tagline/contact/contact.component';
import { ClientsayComponent } from './Task-2-Tagline/clientsay/clientsay.component';
import { ClientImgComponent } from './Task-2-Tagline/clientsay/client-img/client-img.component';
import { ClientCommentComponent } from './Task-2-Tagline/clientsay/client-comment/client-comment.component';
import { BlogComponent } from './Task-2-Tagline/blog/blog.component';
import { FormComponent } from './Task-2-Tagline/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundImgComponent,
    CardComponent,
    BtnComponent,
    TechnologyComponent,
    ExperienceComponent,
    ClutchComponent,
    ReviewsComponent,
    StarsComponent,
    VerifiedreviewsComponent,
    ClientsComponent,
    HeardersComponent,
    TitleComponent,
    Title2Component,
    CardTextComponent,
    SlideComponent,
    SlideImgComponent,
    ContactComponent,
    ClientsayComponent,
    ClientImgComponent,
    ClientCommentComponent,
    BlogComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
