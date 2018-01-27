import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Charity } from "./charity.entity";

@Component()
export class CharityService {
  constructor(
    @InjectRepository(Charity)
    private readonly charityRepository: Repository<Charity>
  ) {}

  async findAll(): Promise<Charity[]> {
    return await this.charityRepository.find();
  }
}
