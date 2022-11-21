import * as React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
});
