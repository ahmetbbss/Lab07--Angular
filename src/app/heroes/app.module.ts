import { BrowserModule } from "@angular/platfobrowser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from '../app.component';
import { HeroesComponent } from 'Heroes/HeroesComponent';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }