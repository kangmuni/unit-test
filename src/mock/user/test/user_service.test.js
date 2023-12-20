const UserService = require('../user_service');
const UserClient = require('../user_client');
const exp = require('constants');

// 상태 > stub
// 행위 > mockb

jest.mock('../user_client');

describe('User Service', () => {
  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('aaa', '123');

    expect(login.mock.calls.length).toBe(1);
  });

  it('should not calls login() on UserClient again if already logged in', async () => {
    await userService.login('aaa', '123');
    await userService.login('aaa', '123');

    expect(login.mock.calls.length).toBe(1);
  });
});
