/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column('integer')
  cpf: number;

  @Column('integer')
  rg: number;

  @Column('integer')
  titEleitor: number;

  @Column('integer')
  pis: number;

  @Column()
  nomePai: string;

  @Column()
  nomeMae: string;

  @Column()
  estadoCivil: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
