import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class YearlyBilling1653252040425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'yearly_billing',
            columns: [
                { name: 'id', type: 'varchar', generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                { name: 'value', type: 'float4' },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
                { name: 'company_id', type: 'varchar' },
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
    }

}
