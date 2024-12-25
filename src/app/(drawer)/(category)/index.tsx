import { FlatList } from 'react-native'

import CategoryItem from '@components/categories/CategoryItem';
import ThemedView from '@components/shared/ThemedView';
import { useCategoryStore } from '@stores';

const CategoryScreen = () => {
  const categories = useCategoryStore(state => state.categories);
  // const addCategory = useCategoryStore(state => state.addCategory);

  return (
    <ThemedView className='mt-5'>
      <FlatList
        numColumns={2}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => (<CategoryItem item={item} />)}
      />
    </ThemedView>
  )
}

export default CategoryScreen;
