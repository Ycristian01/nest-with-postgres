import { Module } from '@nestjs/common';
import { FriendsController } from './adapters/driving/friends.controller';
import { FriendsService } from './domain/in-bound/friends.service';
import { RelationalFriendPersistenceModule } from 'src/friend/infrastructure/persistence/relational/relational-friend-persistence.module';

@Module({
  imports: [RelationalFriendPersistenceModule],
  controllers: [FriendsController],
  providers: [FriendsService],
  exports: [FriendsService, RelationalFriendPersistenceModule],
})
export class FriendModule {}
