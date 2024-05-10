import { Injectable } from '@nestjs/common';
import { CreateFriendDto } from '../../dtos/friends.dto';
import { Friend } from '../model/friend.entity';
import { IFriendService } from './i-friend.service';
import { FriendRepository } from '../out-bound/friend.repository';

@Injectable()
export class FriendsService implements IFriendService {
  constructor(private readonly friendRepo: FriendRepository) {}

  async create(body: CreateFriendDto): Promise<Friend> {
    return this.friendRepo.create(body);
  }

  async findAll(): Promise<Friend[]> {
    return this.friendRepo.findAll();
  }
}
