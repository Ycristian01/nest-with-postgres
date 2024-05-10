import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { FriendsService } from 'src/friend/domain/in-bound/friends.service';
import { Friend } from 'src/friend/domain/model/friend.entity';
import { CreateFriendDto } from 'src/friend/dtos/friends.dto';

@Controller('friends')
export class FriendsController {
  private readonly logger = new Logger(FriendsController.name);
  constructor(private friendsService: FriendsService) {}

  @Post()
  async createFriend(@Body() body: CreateFriendDto): Promise<Friend> {
    return this.friendsService.create(body);
  }

  @Get()
  async getAllFriends(): Promise<Friend[]> {
    const friends = this.friendsService.findAll();
    this.logger.debug({ friends });

    return friends;
  }
}
