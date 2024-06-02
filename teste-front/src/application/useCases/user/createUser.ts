import { UserRepository } from '../../../domain/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    return await this.userRepository.createUser(user);
  }
}