// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component'; // Import the PhotoListComponent
import { PhotoService } from './photo.service'; // Import the PhotoService

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent // Add PhotoListComponent to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Add HttpClientModule to the imports array
  ],
  providers: [PhotoService], // Provide PhotoService in the root injector
  bootstrap: [AppComponent]
})
export class AppModule { }
