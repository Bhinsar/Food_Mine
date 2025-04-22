import { Food } from "../app/model/Food.type";
import { Tags } from "../app/model/Tag.type";

export const sampleFoods: Food[] = [
    {
      id: '1',
      name: 'Pizza Margherita',
      price: 9.99,
      tags: ['Italian', 'Vegetarian'],
      favorite: true,
      stars: 4.5,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['Italy'],
      cookTime: '20-30 minutes'
    },
    {
      id: '2',
      name: 'Sushi',
      price: 14.99,
      tags: ['Japanese', 'Seafood'],
      favorite: false,
      stars: 4.8,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['Japan'],
      cookTime: '30-40 minutes'
    },
    {
      id: '3',
      name: 'Cheeseburger',
      price: 7.5,
      tags: ['American', 'Fast Food'],
      favorite: true,
      stars: 4.2,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['USA'],
      cookTime: '15-20 minutes'
    },
    {
      id: '4',
      name: 'Tacos',
      price: 8.0,
      tags: ['Mexican', 'Spicy'],
      favorite: false,
      stars: 4.6,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['Mexico'],
      cookTime: '10-15 minutes'
    },
    {
      id: '5',
      name: 'Pad Thai',
      price: 11.5,
      tags: ['Thai', 'Noodles'],
      favorite: true,
      stars: 4.7,
      imageUrl: '/assets/food/food3.jpeg',
      origins: ['Thailand'],
      cookTime: '20-25 minutes'
    },
    {
      id: '6',
      name: 'Chicken Biryani',
      price: 12.0,
      tags: ['Indian', 'Rice'],
      favorite: true,
      stars: 4.9,
      imageUrl: '/assets/food/food3.jpeg',
      origins: ['India'],
      cookTime: '30-40 minutes'
    },
    {
      id: '7',
      name: 'Falafel Wrap',
      price: 6.5,
      tags: ['Middle Eastern', 'Vegetarian'],
      favorite: false,
      stars: 4.3,
      imageUrl: '/assets/food/food3.jpeg',
      origins: ['Lebanon', 'Syria'],
      cookTime: '10-15 minutes'
    },
    {
      id: '8',
      name: 'Ramen',
      price: 10.0,
      tags: ['Japanese', 'Noodles'],
      favorite: false,
      stars: 4.5,
      imageUrl: '/assets/food/food3.jpeg',
      origins: ['Japan'],
      cookTime: '25-30 minutes'
    },
    {
      id: '9',
      name: 'Steak',
      price: 18.99,
      tags: ['American', 'Grill'],
      favorite: true,
      stars: 4.7,
      imageUrl: '/assets/food/food3.jpeg',
      origins: ['USA', 'Argentina'],
      cookTime: '30-40 minutes'
    },
    {
      id: '10',
      name: 'Shawarma',
      price: 7.99,
      tags: ['Middle Eastern', 'Fast Food'],
      favorite: true,
      stars: 4.6,
      imageUrl: '/assets/food/food3.jpeg',
      origins: ['Turkey'],
      cookTime: '10-20 minutes'
    },
    {
      id: '11',
      name: 'Pasta Carbonara',
      price: 10.5,
      tags: ['Italian', 'Pasta'],
      favorite: false,
      stars: 4.4,
      imageUrl: '/assets/food/food2.jpeg',
      origins: ['Italy'],
      cookTime: '20-25 minutes'
    },
    {
      id: '12',
      name: 'Pho',
      price: 11.0,
      tags: ['Vietnamese', 'Soup'],
      favorite: false,
      stars: 4.5,
      imageUrl: '/assets/food/food2.jpeg',
      origins: ['Vietnam'],
      cookTime: '30-40 minutes'
    },
    {
      id: '13',
      name: 'Croissant Sandwich',
      price: 6.99,
      tags: ['French', 'Breakfast'],
      favorite: false,
      stars: 4.1,
      imageUrl: '/assets/food/food2.jpeg',
      origins: ['France'],
      cookTime: '5-10 minutes'
    },
    {
      id: '14',
      name: 'Fried Rice',
      price: 8.99,
      tags: ['Chinese', 'Rice'],
      favorite: false,
      stars: 4.3,
      imageUrl: '/assets/food/food2.jpeg',
      origins: ['China'],
      cookTime: '15-20 minutes'
    },
    {
      id: '15',
      name: 'Grilled Salmon',
      price: 15.5,
      tags: ['Seafood', 'Healthy'],
      favorite: true,
      stars: 4.8,
      imageUrl: '/assets/food/food2.jpeg',
      origins: ['Norway'],
      cookTime: '20-25 minutes'
    },
    {
      id: '16',
      name: 'Gyoza',
      price: 7.5,
      tags: ['Japanese', 'Snack'],
      favorite: false,
      stars: 4.4,
      imageUrl: '/assets/food/food2.jpeg',
      origins: ['Japan'],
      cookTime: '10-15 minutes'
    },
    {
      id: '17',
      name: 'Mac and Cheese',
      price: 6.0,
      tags: ['American', 'Comfort Food'],
      favorite: true,
      stars: 4.0,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['USA'],
      cookTime: '20-25 minutes'
    },
    {
      id: '18',
      name: 'Hummus with Pita',
      price: 5.0,
      tags: ['Middle Eastern', 'Vegetarian'],
      favorite: false,
      stars: 4.3,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['Lebanon', 'Israel'],
      cookTime: '5-10 minutes'
    },
    {
      id: '19',
      name: 'Kebab',
      price: 9.5,
      tags: ['Turkish', 'Grill'],
      favorite: true,
      stars: 4.6,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['Turkey'],
      cookTime: '20-30 minutes'
    },
    {
      id: '20',
      name: 'Pancakes',
      price: 4.99,
      tags: ['Breakfast', 'Sweet'],
      favorite: false,
      stars: 4.2,
      imageUrl: '/assets/food/food1.jpeg',
      origins: ['USA'],
      cookTime: '10-15 minutes'
    }
  ];

export const sampleTags: Tags[] =[
  { name: 'All', count: 20 },
  { name: 'Italian', count: 2 },
  { name: 'Vegetarian', count: 3 },
  { name: 'Japanese', count: 3 },
  { name: 'Seafood', count: 2 },
  { name: 'American', count: 3 },
  { name: 'Fast Food', count: 2 },
  { name: 'Mexican', count: 1 },
  { name: 'Spicy', count: 1 },
  { name: 'Thai', count: 1 },
  { name: 'Noodles', count: 2 },
  { name: 'Indian', count: 1 },
  { name: 'Rice', count: 2 },
  { name: 'Middle Eastern', count: 3 },
  { name: 'Grill', count: 2 },
  { name: 'Pasta', count: 1 },
  { name: 'Vietnamese', count: 1 },
  { name: 'Soup', count: 1 },
  { name: 'French', count: 1 },
  { name: 'Breakfast', count: 2 },
  { name: 'Chinese', count: 1 },
  { name: 'Healthy', count: 1 },
  { name: 'Snack', count: 1 },
  { name: 'Comfort Food', count: 1 },
  { name: 'Turkish', count: 1 },
  { name: 'Sweet', count: 1 }
]