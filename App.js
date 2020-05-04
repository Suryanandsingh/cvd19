import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from './src/Route';
import { store } from './src/Redux/Store'

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Route/>
      </Provider>
    )
  }
}
export default App;