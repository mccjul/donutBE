import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body
} from "@nestjs/common";
import { ItemService } from "./item.service";
import { Item } from "./item.entity";
import { ItemDto } from "./item.dto";

@Controller("item")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(":id")
  findOne(@Param() params): Promise<Item> {
    return this.itemService.findOne(params.id);
  }

  @Post()
  async create(@Body() donation: ItemDto): Promise<Item> {
    return this.itemService.create(donation);
  }

  @Put()
  update(@Body() donation: ItemDto): Promise<void> {
    return this.itemService.update(donation);
  }

  @Delete(":id")
  delete(@Param() params): Promise<void> {
    return this.itemService.delete(params.id);
  }
}
