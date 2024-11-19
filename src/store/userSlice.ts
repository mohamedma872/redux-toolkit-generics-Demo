// src/store/userSlice.ts
import { createGenericSlice } from 'redux-toolkit-generics';

const fetchUsers = async () => {
  // This is a mock API call for demonstration purposes.
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
};

export const userSlice = createGenericSlice('user', fetchUsers);
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
