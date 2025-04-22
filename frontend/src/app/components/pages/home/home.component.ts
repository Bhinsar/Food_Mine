import { Component, OnInit, signal } from '@angular/core';
import { Food } from '../../../model/Food.type';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
import { SearchComponent } from "../../partails/search/search.component";
import { TagsComponent } from "../../partails/tags/tags.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods = signal<Food[]>([]);

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods.set(foodService.getAllFoodBySearch(params['searchTerm']));
      }
      else if (params['tag']) {
        this.foods.set(foodService.getFoodByTags(params['tag']));
      }
      else {
        this.foods.set(foodService.getAll());
      }
    });
  }

  ngOnInit(): void {}
}
