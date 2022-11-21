import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface Props {
  statusBarColor: string;
}
const Head: React.FC<Props> = ({statusBarColor}) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const fomattedDate = `${year}년 ${month}월 ${day}일`;

  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={{backgroundColor: statusBarColor, height: top}} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{fomattedDate}</Text>
      </View>
    </>
  );
};

export default Head;

const styles = StyleSheet.create({
  statusbarPlaceholder: {backgroundColor: 'black'},
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  container: {
    backgroundColor: 'blue',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});
