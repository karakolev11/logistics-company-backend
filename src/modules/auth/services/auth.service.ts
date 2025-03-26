import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from '../models/access_token.model';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {}

    public async signIn(username: string, pass: string): Promise<AccessToken> {
        // const user = await this.usersService.findOne(username);
        const user = {password: 'mock', id: 'mock id', username: 'mock username'};
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        
        const payload = { sub: user.id, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
}
