import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
export class Company {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ name: 'cnpj' })
  private cnpj: string;

  @Column({ name: 'social_reason' })
  private socialReason: string;

  @Column({ name: 'market_situation' })
  private marketSituation: string;

  @Column({ name: 'share_capital' })
  private shareCapital: string;

  @Column({ name: 'clt_employees_amount' })
  private cltEmployeesAmount: number;

  @Column({ name: 'third_party_employees_amount' })
  private thirdPartyEmployeesAmount: number;



}


/**
 * \
 *{ name: 'id', type: 'varchar', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
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
 */