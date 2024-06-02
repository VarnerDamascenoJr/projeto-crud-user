import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { UserRepositoryImpl } from '../../infrastructure/repositories/UserRepositoryImpl';
import { User } from '../../domain/entities/User';
import { ListUsers } from '../../application/useCases/user/listUsers';
import { GetUser } from '../../application/useCases/user/getUser';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';
import AddUserForm from '../components/AddUserForm';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User>({
    id: '',
    nome: '',
    idade: 0,
    cpf: '',
    rg: '',
    data_nasc: '',
    sexo: '',
    signo: '',
    mae: '',
    pai: '',
    email: '',
    senha: '',
    cep: '',
    endereco: '',
    numero: 0,
    bairro: '',
    cidade: '',
    estado: '',
    telefone_fixo: '',
    celular: '',
    altura: '',
    peso: 0,
    tipo_sanguineo: '',
    cor: ''
  });
  const userRepository = useMemo(() => new UserRepositoryImpl(), []);

  useEffect(() => {
    const fetchUsers = async () => {
      const listUsers = new ListUsers(userRepository);
      const users = await listUsers.execute();
      setUsers(users);
    };
    fetchUsers();
  }, [userRepository]);

  const handleGetUser = useCallback(async (id: string) => {
    const getUser = new GetUser(userRepository);
    const user = await getUser.execute(id);
    setSelectedUser(user);
    setEditMode(false);
  }, [userRepository]);

  const handleDeleteUser = useCallback(async (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await userRepository.deleteUser(id);
      const listUsers = new ListUsers(userRepository);
      const users = await listUsers.execute();
      setUsers(users);
      setSelectedUser(null);
    }
  }, [userRepository]);

  const handleEditUser = useCallback(() => {
    setEditedUser(selectedUser);
    setEditMode(true);
  }, [selectedUser]);

  const handleSaveEdit = useCallback(async () => {
    if (editedUser) {
      await userRepository.updateUser(editedUser);
      const listUsers = new ListUsers(userRepository);
      const users = await listUsers.execute();
      setUsers(users);
      setEditedUser(null);
      setEditMode(false);
    }
  }, [editedUser, userRepository]);

  const handleCancelEdit = useCallback(() => {
    setEditedUser(null);
    setEditMode(false);
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (editMode && editedUser) {
      const { name, value } = e.target;
      setEditedUser({ ...editedUser, [name]: value });
    }
  }, [editMode, editedUser]);

  const handleNewUserInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  }, [newUser]);

  const handleAddNewUser = useCallback(async (data: User) => {
    await userRepository.createUser(data);
    const listUsers = new ListUsers(userRepository);
    const users = await listUsers.execute();
    setUsers(users);
    setNewUser({
      id: '',
      nome: '',
      idade: 0,
      cpf: '',
      rg: '',
      data_nasc: '',
      sexo: '',
      signo: '',
      mae: '',
      pai: '',
      email: '',
      senha: '',
      cep: '',
      endereco: '',
      numero: 0,
      bairro: '',
      cidade: '',
      estado: '',
      telefone_fixo: '',
      celular: '',
      altura: '',
      peso: 0,
      tipo_sanguineo: '',
      cor: ''
    });
  }, [userRepository]);

  return (
    <div>
      <UserList users={users} onGetUser={handleGetUser} onDeleteUser={handleDeleteUser} />

      {selectedUser && (
        <UserDetails
          user={selectedUser}
          editMode={editMode}
          editedUser={editedUser}
          onEdit={handleEditUser}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          onInputChange={handleInputChange}
        />
      )}

      <AddUserForm onAddNewUser={handleAddNewUser} onInputChange={handleNewUserInputChange}  />
    </div>
  );
};

export default UserPage;