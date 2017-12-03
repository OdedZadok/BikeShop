import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BikeListComponent } from './modules/bikes/bike-list/bike-list.component';
import { BikeListItemComponent } from './modules/bikes/bike-list-item/bike-list-item.component';
import { BikesComponent } from './modules/bikes/bikes/bikes.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { BikeInfoComponent } from './modules/bikes/bike-info/bike-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BikeListComponent,
    BikeListItemComponent,
    BikesComponent,
    TabMenuComponent,
    BikeInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
