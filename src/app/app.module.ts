import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';
import { MaterialsComponent } from './planning/materials/materials.component';
import { SampleAppComponent } from './planning/sample-app/sample-app.component';
import { SampleScheduleComponent } from './planning/sample-schedule/sample-schedule.component';
import { MechanismsComponent } from './running/mechanisms/mechanisms.component';
import { PracticeFeedComponent } from './running/practice-feed/practice-feed.component';
import { PracticeLlamaComponent } from './running/practice-llama/practice-llama.component';
import { ProgrammingComponent } from './running/programming/programming.component';
import { NewsComponent } from './news/news.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent, MaterialsComponent, SampleAppComponent, SampleScheduleComponent, MechanismsComponent, PracticeFeedComponent, PracticeLlamaComponent, ProgrammingComponent, NewsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routes    
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
