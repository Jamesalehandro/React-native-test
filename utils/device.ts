import { useWindowDimensions } from 'react-native';

export const useDeviceDetails = () => {
  // This is used for media queries kind of code. Just like you will do in web
  const { width, height, scale, fontScale } = useWindowDimensions();

  return { width, height, scale, fontScale };
};
