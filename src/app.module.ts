import { Module, Logger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";

import { CharityModule } from "./charity/charity.module";
import { DonationModule } from "./donation/donation.module";
import { ItemModule } from "./item/item.module";
import { ProfileModule } from "./profile/profile.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      database: "local",
      host: "localhost", // for docker mongodb
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    // CharityModule,
    DonationModule,
    // ItemModule,
    // ProfileModule
    Logger
  ],
  controllers: [AppController],
  components: []
})
export class ApplicationModule {}
