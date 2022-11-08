import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { default_values } from '../../styles';
import Button from '../Button';
import InfoText from '../InfoText';
import TextComp from '../Title/Title';

type Props = {
  userNumber: number | null;
  pickerNumHandler: (num: number) => void;
};

const StartGame = (props: Props) => {
  const [number, setNumber] = useState('');
  console.log(Platform.OS);

  //   Functions
  const numberChangeHandler = (e: string) => {
    setNumber(e);
  };

  const resetNumberHandler = () => {
    setNumber('');
  };

  const confirmInputHandler = () => {
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
      Alert.alert('Invalid number', 'Please enter a number between 1 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetNumberHandler,
        },
      ]);
      return;
    } else {
      props.pickerNumHandler(parsedNumber);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Used for making sure the keyboard does not block the view */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'}>
        <View style={styles.rootContainer}>
          <TextComp title={'Guess my  number'} />
          <View style={styles.container}>
            <InfoText title={'Enter a number'} style={{ paddingTop: 10 }} />
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType={'numeric'}
              autoCapitalize={'none'}
              value={number}
              onChangeText={numberChangeHandler}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title={'Reset'} onPress={resetNumberHandler} />
              </View>

              <View style={styles.buttonContainer}>
                <Button title={'Confirm'} onPress={confirmInputHandler} />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  container: {
    marginTop: 50,
    marginHorizontal: 24,
    padding: 8,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 8,
    // This is for creating elevation in ios
    shadowColor: '#72063c',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: default_values.yellowColor,
    marginVertical: 8,
    color: default_values.yellowColor,
    fontSize: 32,
    fontWeight: 'bold',
    width: Platform.select({ ios: 100, android: 150 }),
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});

// How to create a backgroundImage and also add a gradient
//       <LinearGradient
//         style={styles.rootContainer}
//         colors={['#4e0329', default_values.yellowColor]}
//         onLayout={onLayoutRootView}
//       >
//         <ImageBackground
//           source={source}
//           resizeMode={'cover'}
//           style={styles.rootContainer}
//           imageStyle={styles.backgroundImage}
//         >
//           <SafeAreaView style={styles.rootContainer}></SafeAreaView>
//         </ImageBackground>
//       </LinearGradient>
