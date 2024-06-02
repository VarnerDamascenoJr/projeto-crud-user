import { User } from '../entities/User';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  getUser(id: string): Promise<User | null>;
  listUsers(): Promise<User[]>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}