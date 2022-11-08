import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  Modal,
  Image,
} from 'react-native';
import { Props } from './HomeGoals';

interface GoalInputProps {
  goal: string;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
  setCourseGoals: React.Dispatch<React.SetStateAction<Props[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoalInput = ({
  setGoal,
  setCourseGoals,
  goal,
  setShowModal,
  showModal,
}: GoalInputProps) => {
  // Functions
  const goalInputHandler = (enteredText: string) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (goal) {
      setCourseGoals((prev) => [
        ...prev,
        { id: new Date().getMilliseconds(), value: goal },
      ]);
      setGoal('');
      setShowModal(false);
      return;
    }
    Alert.alert('James says:', 'Please enter a goal');
  };

  const logo = require('../../assets/KA2_1208.jpg');

  return (
    <Modal visible={showModal} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image
          source={logo}
          style={{ width: 80, height: 80, margin: 10, borderRadius: 6 }}
          accessibilityLabel={'Logo'}
        />
        <TextInput
          placeholder="Enter goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add goals" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={() => setShowModal(false)} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccccc',
    width: '90%',
    padding: 8,
  },
});
