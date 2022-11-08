import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { default_values } from '../styles';

type Props = {
  title: string;
  style?: StyleProp<TextStyle>;
};

const InfoText = ({ title, style }: Props) => {
  // When you put styles in an array , you can override the styles in the  first style object in the array in the second object
  return <Text style={[styles.instructionText, style]}>{title}</Text>;
};

export default InfoText;

const styles = StyleSheet.create({
  instructionText: {
    color: default_values.yellowColor,
    fontSize: 18,
    fontWeight: '800',
  },
});
