import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByCpf(cpf: number): Promise<User | null> {
    const findUser = await this.findOne({
      where: { cpf },
    });

    return findUser || null;
  }
}

export default UserRepository;
