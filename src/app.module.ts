import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friend } from './friends/friend.entity';
import { FriendsController } from './friends/friends.controller';
import { FriendsService } from './friends/services/friends.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [Friend],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Friend]),
  ],
  controllers: [FriendsController],
  providers: [FriendsService],
})
export class AppModule {}
