import {
  Component,
  signal,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Tags } from '../../../model/Tag.type';
import { FoodService } from '../../../services/food.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags = signal<Tags[]>([]);
  tag: string = '';

  @ViewChild('scrollTags', { static: false }) scrollTags!: ElementRef;

  constructor(
    private foodService: FoodService,
    activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.tags.set(this.foodService.getAllTags());
    activatedRouter.params.subscribe((params) => {
      if (params['tag']) {
        this.tag = params['tag'];
      }
    });
  }

  searchTags(tag: string) {
    if (tag) {
      this.router.navigate(['/tags/', tag]);
    } else {
      this.router.navigate(['/home']);
    }
  }

  scrollLeft() {
    this.scrollTags.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollTags.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
  }
}
