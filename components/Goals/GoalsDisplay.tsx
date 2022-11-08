import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';
import React from 'react';
import { Props } from './HomeGoals';

interface GoalsDisplayProps {
  courseGoals: Props[];
  setCourseGoals: React.Dispatch<React.SetStateAction<Props[]>>;
}

const GoalsDisplay = ({ courseGoals, setCourseGoals }: GoalsDisplayProps) => {
  // Functions

  const deleteItemHandler = (id: number) => {
    const newCourseGoals = courseGoals.filter((item) => item.id !== id);
    setCourseGoals(newCourseGoals);
  };

  const renderList = ({ item }: ListRenderItemInfo<Props>) => (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: 'green' }}
        onPress={() => deleteItemHandler(item.id)}
        style={({ pressed }) => (pressed ? styles.pressed : undefined)}
      >
        <Text style={styles.goalItemText}>{item.value}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.goalsContainer}>
      {/* <ScrollView>
          <Text>List of goals</Text>
          {courseGoals.map((courses, i) => (
            <View style={styles.goalItemContainer} key={i}>
              <Text style={styles.goalItemText}>{courses}</Text>
            </View>
          ))}
        </ScrollView> */}

      <FlatList
        data={courseGoals}
        renderItem={renderList}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default GoalsDisplay;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
    paddingVertical: 15,
  },
  goalItemContainer: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    padding: 8,
    color: '#fff',
  },
  pressed: {
    opacity: 0.5,
  },
});
