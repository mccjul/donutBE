import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class Charity {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() description: string;

  @Column() paymentpath: string;

  @Column() icon: string;
}
