import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ObjectID, MongoRepository } from "typeorm";
import { Donation } from "./donation.entity";
import { DonationDto } from "./donation.Dto";

@Component()
export class DonationService {
  constructor(
    @InjectRepository(Donation)
    private readonly donationRepository: MongoRepository<Donation>
  ) {}

  async findAll(): Promise<Donation[]> {
    return await this.donationRepository.find();
  }

  async findOne(id: string): Promise<Donation> {
    return await this.donationRepository.findOneById(id);
  }

  async create(donation: DonationDto): Promise<Donation> {
    const obj = this.donationRepository.create(donation);
    return await this.donationRepository.save(obj);
  }

  async update(donation: DonationDto): Promise<void> {
    console.log(donation);
    const obj = this.donationRepository.create(donation);
    // const id = new ObjectID(donation.id);
    // console.log(obj);
    // const wr = await this.donationRepository.findOneAndUpdate(
    //   { id: donation.id },
    //   obj
    // );
    this.donationRepository.findOneAndReplace({ id: donation.id }, obj);
    // console.log(wr.value);
    // return wr.value;
  }

  async delete(id: string): Promise<void> {
    await this.donationRepository.findOneAndDelete({ id });
  }
}
