import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  Text,
  TouchableNativeFeedback,
} from 'react-native';

interface Props {
  createHandler: (text: string) => void;
}

const AddTodo: React.FC<Props> = ({createHandler}) => {
  const [text, setText] = useState('');
  const textRef = useRef<null | TextInput>(null);
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <TextInput
        ref={textRef}
        value={text}
        onChangeText={v => {
          setText(v);
        }}
        style={styles.input}
        placeholder="할 일을 입력하세요."
        returnKeyType="done"
        onSubmitEditing={() => {
          createHandler(text);
          setText('');
          Keyboard.dismiss();
        }}
      />
      <View style={styles.addButton}>
        <TouchableNativeFeedback
          onPress={() => {
            createHandler(text);
            setText('');
            Keyboard.dismiss();
          }}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#dbdbdb',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
  input: {
    fontSize: 16,
    paddingVertical: 16,
    paddingLeft: 16,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    right: 20,
    margin: 'auto',
    transform: [{translateY: -20}],
  },
  addButtonText: {
    fontSize: 40,
    display: 'flex',
    alignItems: 'center',
    lineHeight: 40,
    color: 'white',
    flex: 1,
  },
});
