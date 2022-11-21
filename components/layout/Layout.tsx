import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TodoContainer from '../containers/todo/Todo.container';
import Head from './Head';
import Main from './Main';

interface Props {
  statusBarColor: string;
}

const Layout: React.FC<Props> = ({statusBarColor}) => {
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
      {/* //aosStatus bar : StatusBar */}
      <StatusBar backgroundColor={statusBarColor} barStyle={'light-content'} />
      <Head statusBarColor={statusBarColor} />
      <Main>
        <TodoContainer />
      </Main>
    </SafeAreaView>
  );
};

export default Layout;
