import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1609341212479 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'int8',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'rg',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'titEleitor',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'pis',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'nomePai',
            type: 'varchar',
          },
          {
            name: 'nomeMae',
            type: 'varchar',
          },
          {
            name: 'estadoCivil',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
