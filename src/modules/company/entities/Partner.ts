import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('partners')
class Partner {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ name: 'name' })
  private name: string;

  @CreateDateColumn({ name: 'created_at' })
  private createdAt: Date;
}

export { Partner }