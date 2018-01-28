import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from "@nestjs/common";
import { DonationService } from "./donation.service";
import { Donation } from "./donation.entity";
import { DonationDto } from "./donation.Dto";

@Controller("donation")
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Get()
  async findAll(): Promise<Donation[]> {
    return this.donationService.findAll();
  }

  @Get(":id")
  findOne(@Param() params): Promise<Donation> {
    return this.donationService.findOne(params.id);
  }

  @Post()
  async create(@Body() donation: DonationDto): Promise<Donation> {
    return this.donationService.create(donation);
  }

  @Put()
  update(@Body() donation: DonationDto): Promise<void> {
    return this.donationService.update(donation);
  }

  @Delete(":id")
  delete(@Param() params): Promise<void> {
    return this.donationService.delete(params.id);
  }
}
