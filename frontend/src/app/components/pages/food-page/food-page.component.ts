import { Component, signal } from '@angular/core';
import { Food } from '../../../model/Food.type';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { TagsComponent } from '../../partails/tags/tags.component';

@Component({
  selector: 'app-food-page',
  imports: [NgFor],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})

export class FoodPageComponent {
  food! : Food;

  constructor(foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }
}

