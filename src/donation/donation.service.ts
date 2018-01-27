import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Donation } from "./donation.entity";

@Component()
export class DonationService {
  constructor(
    @InjectRepository(Donation)
    private readonly donationRepository: Repository<Donation>
  ) {}

  async findAll(): Promise<Donation[]> {
    return await this.donationRepository.find();
  }
}
