import { Module } from "@nestjs/common";
import { ExampleService } from "./example.service";
import { ExampleController } from "./example.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Example } from "./example.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Example])],
  components: [ExampleService],
  controllers: [ExampleController]
})
export class ExampleModule {}
