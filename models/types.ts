import { Category } from './food';

export type RootStackParamList = {
  Categories: undefined;
  Overview: {
    category: Category;
  };
  Details: {
    id: string;
  };
};
