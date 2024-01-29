import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '553387708630-sa90dvfrrh58moqbo9hu0bcnoget04kd.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8080/google/redirect',
      // callbackURL: 'http://localhost:8080/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    };
    done(null, user);
  }
}
