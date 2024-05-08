import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Friend } from '../friend.entity';
import { Repository } from 'typeorm';
import { CreateFriendDto } from '../dtos/friends.dto';

@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(Friend)
    private readonly friendRepo: Repository<Friend>,
  ) {}

  async createFriend(body: CreateFriendDto): Promise<Friend> {
    const friend = this.friendRepo.create(body);
    return this.friendRepo.save(friend);
  }

  async getAllFriends(): Promise<Friend[]> {
    return this.friendRepo.find();
  }
}
