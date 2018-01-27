import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class Item {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() category: string;

  @Column() description: string;

  @Column() price: number;

  @Column() condition: string;

  @Column() bidder: string;

  @Column() donator: string;

  @Column() picture: string;
}
