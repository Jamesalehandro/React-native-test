import { ReactNode } from 'react';
import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type Props = {
  children: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const PressableComp = ({ children, onPress, style }: Props) => {
  return (
    <Pressable
      android_ripple={{
        color: '#cccc',
        borderless: true,
        foreground: true,
      }}
      style={({ pressed }) => [
        style,
        pressed && Platform.OS === 'ios' ? styles.buttonPress : null,
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default PressableComp;

const styles = StyleSheet.create({
  buttonPress: {
    opacity: 0.6,
  },
});
