// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import UserList from './src/components/UserList';

const App = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default App;
