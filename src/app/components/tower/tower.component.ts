import { Component, OnInit, Input } from '@angular/core';
import { TowerInterface } from 'src/app/interfaces/towerInterface';
import { Inventory } from "src/app/inventory";

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit, TowerInterface {
  // Tower info
  @Input() name: string = "";
  @Input() cost: number = 0;
  count: number = 0;

  // Global resources info
  inventory: Inventory;

  constructor(inventory: Inventory) {
    this.inventory = inventory;
  }

  ngOnInit(): void {
  }

  IncrementCounter(): void {
    if (this.inventory.coins - this.cost >= 0) {
      this.inventory.coins -= this.cost;
      this.count++;

      // TODO: make this better
      this.cost = (this.count+1)*this.cost
    }
  }
}
