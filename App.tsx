/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Layout from './components/layout/Layout';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const statusBarColor = '#26a69a';
  return (
    //전체 배경색
    <SafeAreaProvider style={{backgroundColor: statusBarColor}}>
      {/* //iosStatus bar :SafeAreaView */}
      <Layout statusBarColor={statusBarColor}></Layout>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({});

export default App;
