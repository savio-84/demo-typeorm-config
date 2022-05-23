import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class MonthlyBilling1653251786228 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'monthly_billing',
            columns: [
                { name: 'id', type: 'varchar', generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                { name: 'value', type: 'float4' },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
                { name: 'company_id', type: 'varchar' }
            ],
            foreignKeys: [
                {
                    name: 'company',
                    referencedTableName: 'companies',
                    referencedColumnNames: ['id'],
                    columnNames: ['company_id'],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('monthly_billing')
    }

}
