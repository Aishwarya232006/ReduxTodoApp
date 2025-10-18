/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
import {store} from './src/store';
import TodoListScreen from './src/screens/TodoListScreen.js';
const App = () => {
return (
<Provider store={store}>
<SafeAreaView style={{flex: 1}}>
<StatusBar barStyle="dark-content" />
<TodoListScreen />
</SafeAreaView>
</Provider>
);
};
export default App;