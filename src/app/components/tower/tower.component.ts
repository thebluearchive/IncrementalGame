import { Component, OnInit, Input } from '@angular/core';
import { TowerInterface } from 'src/app/interfaces/towerInterface';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit, TowerInterface {
  @Input() name: string = "";
  count: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
  }

  IncrementCounter(): void {
    this.count ++;
  }
}
