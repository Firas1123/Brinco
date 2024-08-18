import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Ensure HomeComponent is imported

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Declare your HomeComponent here
  ],
  imports: [
    BrowserModule
    // other imports if needed
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this if you are using custom elements
  bootstrap: [AppComponent]
})
export class AppModule { }
