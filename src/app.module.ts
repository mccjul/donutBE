import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { ExampleModule } from "./example/example.module";

@Module({
  imports: [TypeOrmModule.forRoot() /*, ExampleModule */],
  controllers: [AppController],
  components: []
})
export class ApplicationModule {}
