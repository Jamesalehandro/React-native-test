import { StyleSheet, Text, View } from 'react-native';
import { Category } from '../models';
import PressableComp from './PressableComp';
import ShadowComponent from './ShadowComponent';

type Props = {
  data: Category;
  onPress: () => void;
};

const CategoryGridTile = ({ data, onPress }: Props) => {
  return (
    <ShadowComponent style={styles.gridItem}>
      <PressableComp style={styles.button} onPress={onPress}>
        <View style={[styles.innerContainer, { backgroundColor: data.color }]}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </PressableComp>
    </ShadowComponent>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },

  button: {
    flex: 1,
  },
  title: {
    fontWeight: '800',
    fontSize: 18,
    fontFamily: 'Inter_900Black',
  },
});
