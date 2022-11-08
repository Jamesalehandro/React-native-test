import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Meal } from '../models';
import { RootStackParamList } from '../models/types';
import PressableComp from './PressableComp';
import ShadowComponent from './ShadowComponent';

type Props = {
  meal: Meal;
};

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const MealItem = ({
  meal: {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    toUpperCaseComplexity,
    id,
  },
}: Props) => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <ShadowComponent style={styles.container}>
      <PressableComp
        onPress={() => {
          navigation.navigate('Details', {
            id,
          });
        }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              //   When importing image from the web, remember to add width and height
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.extraData}>
            <Text>{duration}mins</Text>
            <Text>{toUpperCaseComplexity(complexity)}</Text>
            <Text>{toUpperCaseComplexity(affordability)}</Text>
          </View>
        </View>
      </PressableComp>
    </ShadowComponent>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 10,
    fontFamily: 'Inter_900Black',
  },

  extraData: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
});
