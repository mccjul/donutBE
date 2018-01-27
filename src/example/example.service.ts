import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Example } from "./example.entity";

@Component()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>
  ) {}

  async findAll(): Promise<Example[]> {
    return await this.exampleRepository.find();
  }
}
