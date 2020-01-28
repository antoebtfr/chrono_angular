import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { ModeSelectComponent } from './components/mode-select/mode-select.component';
import { ChronometreComponent } from './pages/chronometre/chronometre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    ModeSelectComponent,
    ChronometreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
