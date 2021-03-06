import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosheetComponent } from './herosheet/herosheet.component';
import { HeroeslistComponent } from './heroeslist/heroeslist.component';
import { AchievementlistComponent } from './achievementlist/achievementlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HerosheetComponent,
    HeroeslistComponent,
    AchievementlistComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
