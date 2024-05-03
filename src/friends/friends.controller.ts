import { Body, Controller, Get, Post } from '@nestjs/common';
import { FriendsService } from './services/friends.service';
import { CreateFriendDto } from './dtos/friends.dto';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Post()
  createFriend(@Body() body: CreateFriendDto) {
    return this.friendsService.createFriend(body);
  }

  @Get()
  getAllFriends() {
    return this.friendsService.getAllFriends();
  }
}
