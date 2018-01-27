import { Controller, Get } from "@nestjs/common";
import { ExampleService } from "./example.service";
import { Example } from "./example.entity";

@Controller("example")
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  findAll(): Promise<Example[]> {
    return this.exampleService.findAll();
  }
}
