import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private productsList: Products[] = [
    {
      image: "../assets/556_text.webp",
      name: "item-1",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: ["lklkjlkjlkj",";lkjl;jlk;lkj;lkjl;kjl;"]
    },
    {
      image: "../assets/556_text.webp",
      name: "item-2",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-3",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-4",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-5",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-6",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-7",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-8",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-9",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-10",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-11",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    },
    {
      image: "../assets/556_text.webp",
      name: "item-12",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia magni incidunt perspiciatis aperiam a beatae deserunt, saepe rerum vitae?",
      comments: []
    }
  ];

  constructor() { }

  getProductsList(): Products[] {
    return this.productsList;
  }
}
