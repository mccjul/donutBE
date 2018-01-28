import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MongoRepository } from "typeorm";
import { Item } from "./item.entity";
import { ItemDto } from "./item.dto";

@Component()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: MongoRepository<Item>
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemRepository.findOneById(id);
  }

  async create(item: ItemDto): Promise<Item> {
    const obj = this.itemRepository.create(item);
    return await this.itemRepository.save(obj);
  }

  async update(item: ItemDto): Promise<void> {
    console.log(item);
    const obj = this.itemRepository.create(item);
    // const id = new ObjectID(donation.id);
    // console.log(obj);
    // const wr = await this.donationRepository.findOneAndUpdate(
    //   { id: donation.id },
    //   obj
    // );
    this.itemRepository.findOneAndReplace({ id: item.id }, obj);
    // console.log(wr.value);
    // return wr.value;
  }

  async delete(id: string): Promise<void> {
    await this.itemRepository.findOneAndDelete({ id });
  }
}
