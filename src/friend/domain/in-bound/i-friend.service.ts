import { Friend } from '../model/friend';

export interface IFriendService {
  create(friend: Friend): Friend;
  findAll(): Friend[];
}
