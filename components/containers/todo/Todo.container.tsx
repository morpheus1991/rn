import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import {TodoList} from '../../../models/todo';
import uuid from 'react-native-uuid';
import List from './List';
import Empty from './Empty';
import AddTodo from './AddTodo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoList>([
    // {text: 'dddd', id: 'asdsad', isChecked: false, isDone: false},
  ]);
  const isEmpty = todos.length === 0;
  const currentModifyItemRef = useRef<null | TextInput>();
  const createHandler = (text: string) => {
    setTodos([
      ...todos,
      {text, id: uuid.v4() as string, isChecked: false, isDone: false},
    ]);
  };
  const editHandler = ({id, text}: {id: string; text: string}) => {
    setTodos(
      todos.map((item, i) => {
        if (item.id === id) {
          return {...item, text};
        } else {
          return item;
        }
      }),
    );
  };
  const deleteHandler = (id: string) => {
    setTodos(todos.filter(item => item.id !== id));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.avoid}
      keyboardVerticalOffset={useSafeAreaInsets().top + 60}>
      {isEmpty ? <Empty /> : null}
      {!isEmpty ? (
        <List
          todos={todos}
          editHandler={editHandler}
          currentModifyItemRef={currentModifyItemRef}
          deleteHandler={deleteHandler}></List>
      ) : null}
      <AddTodo createHandler={createHandler}></AddTodo>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
};

export default TodoContainer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});
