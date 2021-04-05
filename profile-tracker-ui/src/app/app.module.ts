import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestService } from './common/services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { TrackerModule } from './tracker/tracker.module';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthenticationModule,
    TrackerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    RestService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
