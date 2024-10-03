export interface IRecipes {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  difficulty: string;
  description: string;
  ingredients: IIngredient[];
  instructions: string[];
}

// un ingrédient d'une recette
export interface IIngredient {
  id: number;
  quantity: number;
  unit: string;
  name: string;
}