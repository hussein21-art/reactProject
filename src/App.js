import React from 'react';
import { Provider } from "react-redux";
import store from "./store/index";
import Users from "./components/Users"

function App() {
    return (
      <Provider store = {store} >
        <Users />
      </Provider>
        
    );
}

export default App;
