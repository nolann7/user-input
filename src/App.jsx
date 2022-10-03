import { useState } from 'react';
import InputForm from './components/InputForm';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = function (userName, userAge) {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: userName,
        age: userAge,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };
  const deleteUserHandler = function (userId) {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };
  let content = '';
  if (users.length > 0) {
    content = <UsersList usersList={users} onDeleteUser={deleteUserHandler} />;
  }
  return (
    <div className="App">
      <section id="input-form">
        <InputForm onAddUser={addUserHandler} />
      </section>
      <section id="output-users">{content}</section>
    </div>
  );
}

export default App;
