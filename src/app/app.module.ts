import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { AboutComponent } from '../pages/about/about.component';
import { ConvinceComponent } from '../pages/convince/convince.component';

const appRoutes: Routes = [
  { path: 'principal', component: MainComponent },
  { path: 'quienes-somos', component: AboutComponent },
  { path: 'convence', component: ConvinceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ConvinceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
