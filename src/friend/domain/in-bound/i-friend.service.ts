import { Friend } from '../model/friend.entity';

export interface IFriendService {
  create(friend: Friend): Promise<Friend>;
  findAll(): Promise<Friend[]>;
}
