import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MongoRepository } from "typeorm";
import { Charity } from "./charity.entity";
import { CharityDto } from "./charity.dto";

@Component()
export class CharityService {
  constructor(
    @InjectRepository(Charity)
    private readonly charityRepository: MongoRepository<Charity>
  ) {}

  async findAll(): Promise<Charity[]> {
    return await this.charityRepository.find();
  }

  async findOne(id: string): Promise<Charity> {
    return await this.charityRepository.findOneById(id);
  }

  async create(charity: CharityDto): Promise<Charity> {
    const obj = this.charityRepository.create(charity);
    return await this.charityRepository.save(obj);
  }

  async update(charity: CharityDto): Promise<void> {
    console.log(charity);
    const obj = this.charityRepository.create(charity);
    // const id = new ObjectID(donation.id);
    // console.log(obj);
    // const wr = await this.donationRepository.findOneAndUpdate(
    //   { id: donation.id },
    //   obj
    // );
    this.charityRepository.findOneAndReplace({ id: charity.id }, obj);
    // console.log(wr.value);
    // return wr.value;
  }

  async delete(id: string): Promise<void> {
    await this.charityRepository.findOneAndDelete({ id });
  }
}
