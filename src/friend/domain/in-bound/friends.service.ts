import { Inject, Injectable } from '@nestjs/common';
import { CreateFriendDto } from '../../dtos/friends.dto';
import { IFriendService } from './i-friend.service';
import { IFriendRepository } from '../out-bound/i-friend.repository';
import { Friend } from '../model/friend';

@Injectable()
export class FriendsService implements IFriendService {
  constructor(
    @Inject(IFriendRepository)
    private readonly friendRepo: IFriendRepository,
  ) {}

  create(body: CreateFriendDto): Friend {
    const friend = new Friend(body);
    this.friendRepo.create(friend);
    return friend;
  }

  findAll(): Friend[] {
    return this.friendRepo.findAll();
  }
}
