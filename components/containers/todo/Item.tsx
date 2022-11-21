import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import {TodoItem} from '../../../models/todo';

interface Props {
  todo: TodoItem;
  currentModifyItemRef: React.MutableRefObject<TextInput | null | undefined>;
  editHandler: ({id, text}: {id: string; text: string}) => void;
  deleteHandler: (id: string) => void;
}

const Item: React.FC<Props> = ({
  todo,
  currentModifyItemRef,
  editHandler,
  deleteHandler,
}) => {
  const [text, setText] = useState(todo.text);
  const [isModifing, setIsModifing] = useState<Boolean>(false);
  useEffect(() => {
    if (isModifing && currentModifyItemRef.current) {
      currentModifyItemRef.current.focus();
    }
  }, [isModifing, currentModifyItemRef]);
  return (
    <View style={styles.container}>
      {isModifing ? (
        <TextInput
          value={text}
          style={styles.input}
          ref={currentModifyItemRef as React.MutableRefObject<TextInput>}
          onChangeText={v => {
            setText(v);
          }}
          onSubmitEditing={() => {
            setIsModifing(false);
            editHandler({id: todo.id, text});
          }}
        />
      ) : null}
      {isModifing ? (
        <View
          style={styles.buttonModify}
          onTouchEnd={() => {
            setIsModifing(false);
            editHandler({id: todo.id, text});
          }}>
          <Text>수정하기</Text>
        </View>
      ) : null}
      {!isModifing ? <Text style={styles.text}>{todo.text}</Text> : null}
      {!isModifing ? (
        <View style={styles.buttonModify}>
          <TouchableNativeFeedback
            onPress={() => {
              setIsModifing(true);
            }}>
            <Text style={{}}>수정하기</Text>
          </TouchableNativeFeedback>
        </View>
      ) : null}
      {!isModifing ? (
        <View style={styles.buttonDelete}>
          <TouchableNativeFeedback
            onPress={() => {
              deleteHandler(todo.id);
            }}>
            <Text style={{}}>delete</Text>
          </TouchableNativeFeedback>
        </View>
      ) : null}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  input: {
    borderColor: '#e5e5e5',
    borderWidth: 2,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  buttonModify: {
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  buttonDelete: {
    marginLeft: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
});
