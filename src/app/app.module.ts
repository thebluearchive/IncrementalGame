import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { TowerComponent } from './components/tower/tower.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    TowerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
