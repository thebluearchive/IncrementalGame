import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Inventory {
    level: number = 1;
    coins: number = 100;
    wood: number = 0;
    stone: number = 0;
    iron: number = 0;
    coal: number = 0;
    food: number = 0;
}
