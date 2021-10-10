import { Component } from '@angular/core';
import { Inventory } from "src/app/inventory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  inventory = new Inventory();
}
