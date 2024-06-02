import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import axios from '../api/AxiosInstance';

export class UserRepositoryImpl implements UserRepository {
  async createUser(user: User): Promise<User> {
    const response = await axios.post<User>('/users', user);
    return response.data;
  }

  async getUser(id: string): Promise<User | null> {
    const response = await axios.get<User>(`/users/${id}`); 
    return response.data;
  }

  async listUsers(): Promise<User[]> {
    const response = await axios.get<User[]>('/users/');
    return response.data;
  }

  async updateUser(user: User): Promise<User> {
    const response = await axios.put<User>(`/users/${user.id}`, user);
    return response.data;
  }

  async deleteUser(id: string): Promise<void> {
    await axios.delete(`/users/${id}`);
  }
}