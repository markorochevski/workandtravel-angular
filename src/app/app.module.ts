import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBannerComponent } from './components/side-banner/side-banner.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { PostsComponent } from './components/posts/posts.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AdvicesComponent } from './components/advices/advices.component';
import { ShareComponent } from './components/share/share.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { ConfirmShareComponent } from './components/confirm-share/confirm-share.component';
import { ConfirmContactComponent } from './components/confirm-contact/confirm-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SideBannerComponent,
    HomepageComponent,
    CitiesComponent,
    PostsComponent,
    QuestionsComponent,
    AdvicesComponent,
    ShareComponent,
    ContactComponent,
    ConfirmShareComponent,
    ConfirmContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent  },
      { path: 'iskustva/:route_name', component: PostsComponent  },
      { path: 'iskustva', component: CitiesComponent  },
      { path: 'prashanja', component: QuestionsComponent  },
      { path: 'soveti', component: AdvicesComponent  },
      { path: 'spodeli', component: ShareComponent  },
      { path: 'spodeli-potvrda', component: ConfirmShareComponent  },
      { path: 'kontakt', component: ContactComponent  },
      { path: 'kontakt-potvrda', component: ConfirmContactComponent  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
