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
}
