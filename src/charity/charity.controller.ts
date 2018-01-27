import { Controller, Get } from "@nestjs/common";
import { CharityService } from "./charity.service";
import { Charity } from "./charity.entity";

@Controller("charity")
export class CharityController {
  constructor(private readonly charityService: CharityService) {}

  @Get()
  findAll(): Promise<Charity[]> {
    return this.charityService.findAll();
  }
}
