import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Company1653153484078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'companies',
            columns: [
                { name: 'id', type: 'varchar', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                { name: 'cnpj', type: 'varchar' },
                { name: 'social_reason', type: 'varchar' },
                { name: 'market_situation', type: 'varchar' },
                { name: 'share_capital', type: 'varchar' },
                { name: 'clt_employees_amount', type: 'integer' },
                { name: 'third_party_employees_amount', type: 'integer' },
                { name: 'interns_amount', type: 'integer' },
                { name: 'website', type: 'varchar', isNullable: true },
                { name: 'instagram', type: 'varchar', isNullable: true },
                { name: 'whatsapp', type: 'varchar', isNullable: true },
                { name: 'linkedin', type: 'varchar', isNullable: true },
                { name: 'email', type: 'varchar' },
                { name: 'created_at', type: 'timestamp', default: 'now()' }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
    }

}
