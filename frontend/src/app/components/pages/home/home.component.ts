import { Component, OnInit, signal } from '@angular/core';
import { Food } from '../../../model/Food.type';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods = signal<Food[]>([]);

  constructor(private foodService: FoodService) {
    this.foods.set(foodService.getAll());
  }

  ngOnInit(): void {}
}
