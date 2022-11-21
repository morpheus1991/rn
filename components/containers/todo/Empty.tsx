import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {}

const Empty: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>할일이 없습니다. 등록해주세요!</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
