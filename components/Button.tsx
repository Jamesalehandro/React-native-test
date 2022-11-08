import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { default_values } from '../styles';

type Props = {
  title: ReactNode;
  onPress?: () => void;
};

const Button = ({ title, onPress }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: '#640233',
        }}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
      >
        <Text style={styles.button}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#72063c',
    elevation: 8,
  },
  button: {
    color: default_values.yellowColor,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Inter_900Black',
  },
  pressed: {
    opacity: 0.75,
  },
});
