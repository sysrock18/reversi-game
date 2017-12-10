import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdProgressBarModule, MdSnackBarModule, MdDialogModule } from '@angular/material';
import { SwaggerApiService } from './services/swagger-api.service';
import { AppComponent } from './app.component';
import { ConfirmRestartComponent } from './confirm-restart/confirm-restart.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmRestartComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdProgressBarModule,
    MdSnackBarModule,
    MdDialogModule
  ],
  providers: [
    SwaggerApiService
  ],
  entryComponents: [
    ConfirmRestartComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
