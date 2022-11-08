import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
};

const ShadowComponent = ({ children, style }: Props) => {
  return <View style={[styles.default, style]}>{children}</View>;
};

export default ShadowComponent;

const styles = StyleSheet.create({
  default: {
    borderRadius: 8,
    elevation: 2,
    // You must add background color for shadow to work on iOS
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    // It is important to remove overflow on ios to make the box shadow show
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
});
