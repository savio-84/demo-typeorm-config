import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
class Company {
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

  @Column({ name: 'interns_amount' })
  private internsAmount: number;

  @Column({ name: 'website' })
  private website: string;

  @Column({ name: 'instagram' })
  private instagram: string;

  @Column({ name: 'whatsapp' })
  private whatsapp: string;

  @Column({ name: 'linkedin' })
  private linkedin: string;

  @Column({ name: 'email' })
  private email: string;

  @CreateDateColumn({ name: 'created_at' })
  private createdAt: Date;
}

export { Company }