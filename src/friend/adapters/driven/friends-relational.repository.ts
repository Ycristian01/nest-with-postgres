import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Friend } from 'src/friend/domain/model/friend.entity';
import { FriendRepository } from 'src/friend/domain/out-bound/friend.repository';
import { CreateFriendDto } from 'src/friend/dtos/friends.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FriendsRelationalRepository implements FriendRepository {
  constructor(
    @InjectRepository(Friend)
    private readonly friendsRepository: Repository<Friend>,
  ) {}

  async create(body: CreateFriendDto): Promise<Friend> {
    return this.friendsRepository.save(this.friendsRepository.create(body));
  }

  async findAll(): Promise<Friend[]> {
    return this.friendsRepository.find();
  }
}
