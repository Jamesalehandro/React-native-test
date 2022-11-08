interface FoodModel {
  id: string;
  title: string;
  color: string;
}

export class Category implements FoodModel {
  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }

  id: string;
  title: string;
  color: string;
}

export class Meal {
  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree?: boolean,
    isVega?: boolean,
    isLactoseFree?: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVega = isVega;
    this.isLactoseFree = isLactoseFree;
  }

  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree?: boolean;
  isVega?: boolean;
  isLactoseFree?: boolean;

  toUpperCaseComplexity(str: string): string {
    return str.toUpperCase();
  }
}
