import { View, Image, StyleSheet, Text } from 'react-native';
import { default_values } from '../../styles';
import Button from '../Button';
import TextComp from '../Title/Title';

type Props = {
  countToGuessNumber: number;
  chosenNumber: number;
  onPress: () => void;
};

const GameOver = ({ chosenNumber, countToGuessNumber, onPress }: Props) => {
  return (
    <View style={styles.rootContainer}>
      <TextComp title={'GAME OVER!'} />

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      <Text style={styles.textContainer}>
        Your phone needed <Text style={styles.text}>{countToGuessNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.text}>{chosenNumber}</Text>
      </Text>

      <View>
        <Button title={'Start a new game'} onPress={onPress} />
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: default_values.yellowColor,
    marginVertical: 32,
    alignSelf: 'center',
  },
  rootContainer: {
    flex: 1,
    padding: 24,
  },

  textContainer: {
    color: default_values.yellowColor,
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },

  text: {
    fontFamily: 'Inter_900Black',
    fontStyle: 'italic',
    fontSize: 28,
  },
});
