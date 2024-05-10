import { Friend } from '../model/friend';

export interface IFriendRepository {
  create(friend: Friend): Friend;
  findAll(): Friend[];
}

export const IFriendRepository = Symbol('IFriendRepository');
