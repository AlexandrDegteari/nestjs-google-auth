import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @UseGuards(AuthGuard('google'))
  @Get()
  async googleAuth(@Req() req) {}

  @UseGuards(AuthGuard('google'))
  @Get('auth/google/callback')
  async googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}
