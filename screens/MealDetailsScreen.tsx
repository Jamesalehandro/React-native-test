import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../models/types';
import { Meals } from '../store/data';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
type ProfileScreenRouteProp = Props['route'];

const MealDetailsScreen = ({ route, navigation }: Props) => {
  const router = useRoute<ProfileScreenRouteProp>();
  router.params.id;
  const { id } = route.params;

  const renderMeal = Meals.find((item) => item.id === id);

  return (
    <View>
      <Text>{}</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
