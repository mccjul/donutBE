import { Module } from "@nestjs/common";
import { CharityService } from "./charity.service";
import { CharityController } from "./charity.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Charity } from "./charity.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Charity])],
  components: [CharityService],
  controllers: [CharityController]
})
export class CharityModule {}
