import { Module } from '@nestjs/common';
import { FriendsController } from './adapters/driving/friends.controller';
import { FriendsService } from './domain/in-bound/friends.service';
import { IFriendRepository } from './domain/out-bound/i-friend.repository';
import { FriendInMemory } from './adapters/driven/friend-in-memory';

@Module({
  imports: [],
  controllers: [FriendsController],
  providers: [
    FriendsService,
    {
      provide: IFriendRepository,
      useClass: FriendInMemory,
    },
  ],
})
export class FriendModule {}
