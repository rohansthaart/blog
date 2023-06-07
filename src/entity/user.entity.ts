import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Admin {
  //User is table
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;
}
