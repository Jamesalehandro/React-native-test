import GoalInput from './GoalInput';
import GoalsDisplay from './GoalsDisplay';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export interface Props {
  id: number;
  value: string;
}

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState<Props[]>([]);
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => setShowModal((prev) => !prev);

  return (
    <View style={styles.container}>
      <Button title={'Add new goal'} color={'green'} onPress={modalHandler} />

      {showModal && (
        <GoalInput
          goal={goal}
          setCourseGoals={setCourseGoals}
          setGoal={setGoal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}

      {courseGoals.length > 0 && (
        <GoalsDisplay
          courseGoals={courseGoals}
          setCourseGoals={setCourseGoals}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
