import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { generateRandomBetween } from '../../utils/randomNumber';
import TextComp from '../Title/Title';
import NumberContainer from '../NumberContainer';
import InfoText from '../InfoText';
import Button from '../Button';

type Props = {
  chosenNumber: number;
  gameIsOverHandler: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

enum Direction {
  Higher = 'higher',
  Lower = 'lower',
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ chosenNumber, gameIsOverHandler, setCount }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      gameIsOverHandler();
    }
  }, [currentGuess, chosenNumber, gameIsOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextNumberGuessHandler = (direction: Direction) => {
    if (
      (direction === Direction.Lower && currentGuess < chosenNumber) ||
      (direction === Direction.Higher && currentGuess > chosenNumber)
    ) {
      const { alert } = Alert;
      alert(`Do not lie`, ' You know this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === Direction.Lower) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCount((prev) => prev + 1);
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <TextComp title={`Opponent's guess`} />

      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <View style={{ alignSelf: 'center', paddingBottom: 20 }}>
          <InfoText title={'Higher'} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }}>
            <Button
              title={<Ionicons name="md-add" size={32} color={'#FFF'} />}
              onPress={() => nextNumberGuessHandler(Direction.Higher)}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Button
              title={<Ionicons name="md-remove" size={32} color={'#FFF'} />}
              onPress={() => nextNumberGuessHandler(Direction.Lower)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    paddingTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
