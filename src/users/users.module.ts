import { UsersResolver } from './users.resolver';
import { Module } from '@nestjs/common';
import { UserService } from './users.service';

@Module({
    providers: [UsersResolver, UserService]
})
export class UsersModule{}