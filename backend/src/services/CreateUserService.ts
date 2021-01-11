import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import UserRepository from '../repositories/UsersRepository';

interface Request {
  nome: string;
  cpf: number;
  rg: number;
  titEleitor: number;
  pis: number;
  nomePai: string;
  nomeMae: string;
  estadoCivil: string;
}

class CreateUserService {
  public async execute({
    nome,
    cpf,
    rg,
    titEleitor,
    pis,
    nomePai,
    nomeMae,
    estadoCivil,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);

    const findUserCpf = await usersRepository.findByCpf(cpf);

    if (findUserCpf) {
      throw Error('User already exists');
    }

    const user = usersRepository.create({
      nome,
      cpf,
      rg,
      titEleitor,
      pis,
      nomePai,
      nomeMae,
      estadoCivil,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
