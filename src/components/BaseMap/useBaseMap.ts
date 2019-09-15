import {useEffect} from 'react';
import {Alert} from 'react-native';

export const useBaseMap = () => {
  useEffect(() => {
    Alert.alert('Use Effect');
  }, []);

  return {};
};
