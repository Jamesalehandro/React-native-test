import { Category, Meal } from '../models';

// Better to use class when creating multiple instances of an object
export const Categories = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick and Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light and Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced'),
];

export const Meals = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese(optional)',
    ],
    [
      'Cut the tomatoes and onion into small pieces',
      'Boil some water - add salt to it once it boils',
      'Put the spaghetti into the boiling water- they should be done in about 10 minutes',
      'In the meantime, heaten up  spme olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt,pepper  and your other spices',
    ],
    false,
    true,
    true
  ),
  new Meal(
    'm2',
    ['c1'],
    'Spaghetti with Tomato ',
    'affordable',
    'simple',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese(optional)',
    ],
    [
      'Cut the tomatoes and onion into small pieces',
      'Boil some water - add salt to it once it boils',
      'Put the spaghetti into the boiling water- they should be done in about 10 minutes',
      'In the meantime, heaten up  spme olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt,pepper  and your other spices',
    ],
    false,
    true,
    true
  ),
  new Meal(
    'm3',
    ['c3'],
    'Spaghetti with  Sauce',
    'affordable',
    'simple',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese(optional)',
    ],
    [
      'Cut the tomatoes and onion into small pieces',
      'Boil some water - add salt to it once it boils',
      'Put the spaghetti into the boiling water- they should be done in about 10 minutes',
      'In the meantime, heaten up  spme olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt,pepper  and your other spices',
    ],
    false,
    true,
    true
  ),
];
