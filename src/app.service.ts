import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user';
    }
    return {
      message: 'User info',
      user: req.user,
    };
  }
}
