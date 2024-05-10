import { CreateFriendDto } from 'src/friend/dtos/friends.dto';
import { Friend } from '../model/friend.entity';

export abstract class FriendRepository {
  abstract create(data: CreateFriendDto): Promise<Friend>;
  abstract findAll(): Promise<Friend[]>;
}
