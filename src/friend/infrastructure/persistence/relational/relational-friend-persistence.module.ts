import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendsRelationalRepository } from 'src/friend/adapters/driven/friends-relational.repository';
import { Friend } from 'src/friend/domain/model/friend.entity';
import { FriendRepository } from 'src/friend/domain/out-bound/friend.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Friend])],
  providers: [
    {
      provide: FriendRepository,
      useClass: FriendsRelationalRepository,
    },
  ],
  exports: [FriendRepository],
})
export class RelationalFriendPersistenceModule {}
