import { Component, OnInit } from '@angular/core';
import { Inventory } from "src/app/inventory";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  inventory: Inventory;

  constructor(inventory: Inventory) {
    this.inventory = inventory;
   }

  ngOnInit(): void {
  }

}
