import { Platform, StyleSheet, Text, View } from 'react-native';
import { default_values } from '../../styles';

type Props = {
  title: string;
};

const TextComp = ({ title }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{`${title} ${Platform.OS}`}</Text>
    </View>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: default_values.yellowColor,
    fontFamily: 'Inter_900Black',
    maxWidth: '80%',
    alignSelf: 'center',
  },
});
