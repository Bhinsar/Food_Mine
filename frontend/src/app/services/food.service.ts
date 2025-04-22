import { Injectable } from '@angular/core';
import { Food } from '../model/Food.type';
import { sampleFoods, sampleTags } from '../../data/data';
import { Tags } from '../model/Tag.type';

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

  getAllTags():Tags[]{
    return sampleTags;
  }

  getFoodByTags(tag: string): Food[]{
    return tag === "All" ? this.getAll() : this.getAll().filter((food) => food.tags?.includes(tag))
  }
}
