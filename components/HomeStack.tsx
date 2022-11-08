import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/types';
import { CategoriesScreen, MealDetailsScreen, MealScreen } from '../screens';

const HomeStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    // You add the styles you want all screens to share here.  But if there is any clashing styles here and between stack.scrren, stack.screen style is chosen
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#cccc' },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#24180f' },
      }}
      initialRouteName="Categories"
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen} // Used when you dont want to config headers forthings dynamically
        options={{
          title: 'Categories',
        }}
      />
      <Stack.Screen
        name="Overview"
        component={MealScreen}
        // One way of dynamically setting screen headers
        // options: ({ route, navigation }: ScreenProps) => {
        //   const cat = route.params?.category.title;
        //   return {
        //     title: cat,
        //   };
        // },
      />
      <Stack.Screen name="Details" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
