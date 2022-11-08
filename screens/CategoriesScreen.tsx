import CategoryGridTile from '../components/CategoryGridTile';
import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { Categories } from '../store/data';
import { Category } from '../models';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/types';
import { useRoute } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;
const CategoriesScreen = ({ navigation: { navigate } }: Props) => {
  // Functions
  const renderItemHandler = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigate('Overview', { category: itemData.item });
    };

    return <CategoryGridTile data={itemData.item} onPress={pressHandler} />;
  };

  const keyExtractorHandler = (item: Category) => item.id;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Categories}
        renderItem={renderItemHandler}
        keyExtractor={keyExtractorHandler}
        bounces
        keyboardDismissMode="on-drag"
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
