import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { ExampleModule } from "./example/example.module";
import { CharityModule } from "./charity/charity.module";
import { DonationModule } from "./donation/donation.module";
import { ItemModule } from "./item/item.module";
import { ProfileModule } from "./profile/profile.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      database: "donut",
      host: "mongodb",
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    CharityModule,
    DonationModule,
    ItemModule,
    ProfileModule /*, ExampleModule */
  ],
  controllers: [AppController],
  components: []
})
export class ApplicationModule {}
