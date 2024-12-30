import { create } from 'zustand'

interface CategoryState {
  categories: ICategory[];

  addCategory: (category: ICategory) => void;
}

export interface ICategory {
  id: number;
  name: string;
  description?: string;
  image?: string;
}

const categories: ICategory[] = [
  {
    id: 1,
    name: 'Tacos',
    description: 'Tacos de suadero, longaniza, enchilada',
    image: 'https://i.blogs.es/71dee0/dap-1-25-/1366_2000.jpg',
  },
  {
    id: 2,
    name: 'Bebidas',
    description: 'Refrescos Coca cola, Manzana, Boing',
    image: 'https://cdn.milenio.com/uploads/media/2019/06/10/coca-cola-mantenido-respetuosa-esencia.jpg',
  },
  {
    id: 3,
    name: 'Tortas',
    description: 'Tortas de suadero, longaniza, enchilada y campechanas',
    image: 'https://storage.googleapis.com/dam-bks-prd-1385851.bks.prd.v8.commerce.mi9cloud.com/Images/Recipes/Grilled-Torta-al-Pastor-600x360.webp',
  },
  {
    id: 4,
    name: 'Postres',
    description: 'Pastel, Pay, Flan. El postre es un plato dulce para después de la comida. Un postre es una comida dulce que se consume al final de una comida. Por lo general, se sirve después del plato principal y suele tener sabores dulces, aunque también puede incluir ingredientes como frutas, lácteos, chocolate, nueces, entre otros. El postre es un plato dulce para después de la comida. Un postre es una comida dulce que se consume al final de una comida. Por lo general, se sirve después del plato principal y suele tener sabores dulces, aunque también puede incluir ingredientes como frutas, lácteos, chocolate, nueces, entre otros. El postre es un plato dulce para después de la comida. Un postre es una comida dulce que se consume al final de una comida. Por lo general, se sirve después del plato principal y suele tener sabores dulces, aunque también puede incluir ingredientes como frutas, lácteos, chocolate, nueces, entre otros',
    image: 'https://www.pequerecetas.com/wp-content/uploads/2010/11/postres-de-chocolate.jpg',
  },
  {
    id: 5,
    name: 'Tacos',
    description: 'Tacos de suadero, longaniza, enchilada',
    image: 'https://i.blogs.es/71dee0/dap-1-25-/1366_2000.jpg',
  },
  {
    id: 6,
    name: 'Bebidas',
    description: 'Refrescos Coca cola, Manzana, Boing',
    image: 'https://cdn.milenio.com/uploads/media/2019/06/10/coca-cola-mantenido-respetuosa-esencia.jpg',
  },
  {
    id: 7,
    name: 'Tortas',
    description: 'Tortas de suadero, longaniza, enchilada y campechanas',
    image: 'https://storage.googleapis.com/dam-bks-prd-1385851.bks.prd.v8.commerce.mi9cloud.com/Images/Recipes/Grilled-Torta-al-Pastor-600x360.webp',
  },
  {
    id: 8,
    name: 'Postres',
    description: 'Pastel, Pay, Flan',
    image: 'https://www.pequerecetas.com/wp-content/uploads/2010/11/postres-de-chocolate.jpg',
  },
];

export const useCategoryStore = create<CategoryState>()((set) => ({
  categories,

  addCategory: (category: ICategory) => set((state) => ({ categories: [...state.categories, category] })),
}));
