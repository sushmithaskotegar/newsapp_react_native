// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsOverview from './src/components/NewsOverview';
import NewsDetailScreen from './src/components/NewsDetailScreen';
import SinglenewsDetail from './src/components/SinglenewsDetail';
import { combineReducers } from 'redux';
import newsReducer from './src/redux/newsReducer';
import { createStore ,applyMiddleware,compose} from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer =combineReducers({
  news:newsReducer
  })
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));



const Stack = createStackNavigator();


function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={NewsOverview} />
        <Stack.Screen name="Details" component={NewsDetailScreen} />
        <Stack.Screen name="SinglenewsDetail" component={SinglenewsDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;