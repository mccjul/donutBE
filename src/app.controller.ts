import {
  Get,
  Controller,
  Body,
  Post,
  Request,
  HttpCode,
  Param,
  HttpStatus,
  Response
} from "@nestjs/common";

@Controller()
export class AppController {
  @HttpCode(201)
  @Post()
  create(@Body("thing") body) {
    return ["hey"];
  }

  @Get()
  root() {
    return "bob";
  }

  @Get("/:id")
  public async getUser(@Response() res, @Param("id") id) {
    res.status(HttpStatus.OK).json({ this: "that" });
  }
}
