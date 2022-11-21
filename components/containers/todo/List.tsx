import * as React from 'react';
import {StyleSheet, TextInput, ScrollView} from 'react-native';
import {TodoList} from '../../../models/todo';
import Item from './Item';

interface Props {
  todos: TodoList;
  currentModifyItemRef: React.MutableRefObject<TextInput | null | undefined>;
  editHandler: ({id, text}: {id: string; text: string}) => void;
  deleteHandler: (id: string) => void;
}

const List: React.FC<Props> = ({
  todos,
  currentModifyItemRef,
  editHandler,
  deleteHandler,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todos.map((todo, i) => (
        <Item
          todo={todo}
          key={i}
          currentModifyItemRef={currentModifyItemRef}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      ))}
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
  },
});
