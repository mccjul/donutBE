import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class Profile {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() zip: string;

  @Column() email: string;

  @Column() bids: Array<string>;
}
