import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Declare HomeComponent here
  ],
  imports: [
    BrowserModule,
    // other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
