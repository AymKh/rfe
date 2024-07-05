import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// CUSTOM IMPORTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './views/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FileExplorerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
