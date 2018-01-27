import { Module } from "@nestjs/common";
import { DonationService } from "./donation.service";
import { DonationController } from "./donation.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Donation } from "./donation.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  components: [DonationService],
  controllers: [DonationController]
})
export class DonationModule {}
