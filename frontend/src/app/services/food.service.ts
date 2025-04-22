import { Injectable } from '@angular/core';
import { Food } from '../model/Food.type';
import { sampleFoods } from '../../data/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sampleFoods
  }
  getAllFoodBySearch(searchTerm: string): Food[]{
    return this.getAll().filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
