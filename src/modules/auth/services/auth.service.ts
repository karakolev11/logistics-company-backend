import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from '../models/access_token.model';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class AuthService {

    constructor(
      private jwtService: JwtService,
      private usersService: UsersService  
    ) {}

    public async login(username: string, password: string): Promise<AccessToken> {
        const user = await this.usersService.getUserByUsername(username);

        if (!user || user?.password !== password) {
          throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
}
