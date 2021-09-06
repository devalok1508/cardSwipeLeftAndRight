import React from 'react'
import { View, Text,StatusBar } from 'react-native';
import NavigationPage from './src/navigattionShow/NavigationPage';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#7F00FF" barStyle="light-content" />
       <NavigationPage/>
    </>
  )
}

export default App;
