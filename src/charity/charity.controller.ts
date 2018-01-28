import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete
} from "@nestjs/common";
import { CharityService } from "./charity.service";
import { Charity } from "./charity.entity";
import { CharityDto } from "./charity.dto";

@Controller("charity")
export class CharityController {
  constructor(private readonly charityService: CharityService) {}

  @Get()
  findAll(): Promise<Charity[]> {
    return this.charityService.findAll();
  }

  @Get(":id")
  findOne(@Param() params): Promise<Charity> {
    return this.charityService.findOne(params.id);
  }

  @Post()
  async create(@Body() charity: CharityDto): Promise<Charity> {
    return this.charityService.create(charity);
  }

  @Put()
  update(@Body() charity: CharityDto): Promise<void> {
    return this.charityService.update(charity);
  }

  @Delete(":id")
  delete(@Param() params): Promise<void> {
    return this.charityService.delete(params.id);
  }
}
