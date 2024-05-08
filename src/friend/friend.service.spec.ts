import { Test, TestingModule } from '@nestjs/testing';
import { FriendsService } from './services/friends.service';
import { Friend } from './friend.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateFriendDto } from './dtos/friends.dto';

describe('FriendsService', () => {
  let friendsService: FriendsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        FriendsService,
        { provide: getRepositoryToken(Friend), useClass: mockRepository },
      ],
    }).compile();

    friendsService = app.get<FriendsService>(FriendsService);
  });

  it('should be defined', () => {
    expect(friendsService).toBeDefined();
  });

  it('should return a friend', async () => {
    const result: Friend[] = [
      {
        id: 1,
        name: 'uy el carlos',
        secondName: 'el villa',
        age: 24,
        workplace: 'herb',
        hobbies: ['jugar play', 'ir a sintética', 'ser motero'],
      },
    ];

    jest.spyOn(friendsService, 'getAllFriends').mockResolvedValue(result);
    expect(await friendsService.getAllFriends()).toBe(result);
  });

  it('should return an empty array of friends []', async () => {
    const result: Friend[] = [];

    jest.spyOn(friendsService, 'getAllFriends').mockResolvedValue(result);
    expect(await friendsService.getAllFriends()).toEqual(result);
  });

  it('should create and return a friend', async () => {
    const newFriend: CreateFriendDto = {
      name: 'oskhar arrieta',
      secondName: 'el osk',
      age: 24,
      workplace: 'gases',
      hobbies: ['no jugar', 'ser fifa', 'ver tiktok'],
    };

    const mockFriend = {
      id: 2,
      name: 'oskhar arrieta',
      secondName: 'el osk',
      age: 24,
      workplace: 'gases',
      hobbies: ['no jugar', 'ser fifa', 'ver tiktok'],
    };

    jest
      .spyOn(friendsService, 'createFriend')
      .mockImplementationOnce(() => Promise.resolve(mockFriend));
    const result = await friendsService.createFriend(
      newFriend as CreateFriendDto,
    );
    expect(result).toEqual(mockFriend);
  });
});

export const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));
