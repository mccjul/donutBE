import { Controller, Get } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { Profile } from "./profile.entity";

@Controller("profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }
}
