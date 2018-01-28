import { Entity, Column, ObjectIdColumn, ObjectID, Timestamp } from "typeorm";

@Entity()
export class Donation {
  @ObjectIdColumn() id: ObjectID;

  @Column() charityid: ObjectID;

  @Column() timestamp: Timestamp;

  @Column() itemid: ObjectID;

  @Column() donator_confirm: boolean;

  @Column() buyer_confirm: boolean;
}
