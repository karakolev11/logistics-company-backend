import { Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { AccessToken } from './models/access_token.model';

@Controller('auth')
export class AuthController {
    
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  public async login(@Body() signInDto: UserLoginDto): Promise<AccessToken> {
    return this.authService.login(signInDto.username, signInDto.password);
  }
}
