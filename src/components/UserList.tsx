// src/components/UserList.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { userActions } from '../store/userSlice';

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);
  const loading = useAppSelector((state) => state.users.loading);
  const error = useAppSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(userActions.fetchEntities());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
      <Button title="Reload Users" onPress={() => dispatch(userActions.fetchEntities())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default UserList;
