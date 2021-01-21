import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StateService } from './state/state.service';
import { DemoPipe } from './pipes/demo.pipe';
import { ColorDirective } from './directive/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoPipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
