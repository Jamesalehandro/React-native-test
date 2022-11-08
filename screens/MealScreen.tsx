import MealItem from '../components/MealItem';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Category, Meal } from '../models';
import { Meals } from '../store/data';
import { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/types';

interface Props {
  category: Category;
}

type ParamsProps = NativeStackScreenProps<RootStackParamList, 'Overview'>;

// screens components gets route and navigation by default from react-navigation
const MealScreen = ({ route, navigation }: ParamsProps) => {
  const router = useRoute();

  const {
    category: { id, title },
  } = router.params as Props;

  // Another way of doing dynamic config for screen headers
  useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [id, title]);

  const displayMeals = Meals.filter((meal) => meal.categoryIds.includes(id));

  const renderItemHandler = ({ item }: ListRenderItemInfo<Meal>) => {
    return <MealItem meal={item} />;
  };

  const keyExtractorHandler = (item: Meal) => item.id;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={displayMeals}
        renderItem={renderItemHandler}
        keyExtractor={keyExtractorHandler}
        bounces
        keyboardDismissMode="on-drag"
      />
    </View>
  );
};

export default MealScreen;

const styles = StyleSheet.create({});
