import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Item } from "./item.entity";

@Component()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }
}
