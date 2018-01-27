import { Controller, Get } from "@nestjs/common";
import { DonationService } from "./donation.service";
import { Donation } from "./donation.entity";

@Controller("donation")
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Get()
  findAll(): Promise<Donation[]> {
    return this.donationService.findAll();
  }
}
