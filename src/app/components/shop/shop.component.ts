import { Component, OnInit } from '@angular/core';
import { TowerInterface } from 'src/app/interfaces/towerInterface';
import { TOWERS } from 'src/app/towers';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  towerList = TOWERS;

  constructor() { }

  ngOnInit(): void {
  }

}
