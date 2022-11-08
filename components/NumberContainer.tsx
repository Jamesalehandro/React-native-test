import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { default_values } from '../styles';
import { useDeviceDetails } from '../utils/device';

type Props = {
  children: React.ReactNode;
};

const NumberContainer = ({ children }: Props) => {
  const { width, height } = useDeviceDetails();

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: default_values.yellowColor,
    padding: 12,
    borderRadius: 8,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: default_values.yellowColor,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
