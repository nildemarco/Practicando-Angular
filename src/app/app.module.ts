import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NarBarComponent } from './nar-bar/nar-bar.component';

import { PostsService } from '../app/posts.service';
import { SignupFormComponent } from './signup-form/signup-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NarBarComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
