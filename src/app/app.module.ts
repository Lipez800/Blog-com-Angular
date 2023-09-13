import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LuisFelipeBlogComponent } from './luis-felipe-blog/luis-felipe-blog.component';
import { Blogparte2Component } from './blogparte2/blogparte2.component';

@NgModule({
  declarations: [
    AppComponent,
    LuisFelipeBlogComponent,
    Blogparte2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
