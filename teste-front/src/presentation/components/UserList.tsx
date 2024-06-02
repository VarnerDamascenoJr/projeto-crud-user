import React, { useCallback } from 'react';
import { User } from '../../domain/entities/User';

interface UserListProps {
  users: User[];
  onGetUser: (id: string) => void;
  onDeleteUser: (id: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onGetUser, onDeleteUser }) => {
  const handleGetUser = useCallback((id: string) => onGetUser(id), [onGetUser]);
  const handleDeleteUser = useCallback((id: string) => onDeleteUser(id), [onDeleteUser]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nome} - {user.email}
            <button onClick={() => handleGetUser(user.id)}>Get User</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(UserList);