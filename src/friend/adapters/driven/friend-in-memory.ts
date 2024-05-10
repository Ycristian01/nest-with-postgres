import { Injectable } from '@nestjs/common';
import { Friend } from 'src/friend/domain/model/friend';
import { IFriendRepository } from 'src/friend/domain/out-bound/i-friend.repository';

@Injectable()
export class FriendInMemory implements IFriendRepository {
  private readonly friends: Friend[] = [];

  create(friend: Friend): Friend {
    this.friends.push(friend);
    return friend;
  }

  findAll(): Friend[] {
    return this.friends;
  }
}
