const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('add user that is not in the list', () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

test('remove user that is not in the list', () => {
  const user = new User(1234, "Santiago", "santiago@generation.org");
  expect(() => userController.remove(user)).not.toThrowError();
});

test('find user by email when user exists', () => {
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});

test('find user by email when user does not exist', () => {
  expect(userController.findByEmail("nonexistent@example.com")).toBeUndefined();
});

test('find user by id when user exists', () => {
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(1234)).toEqual(user);
});

test('find user by id when user does not exist', () => {
  expect(userController.findById(9999)).toBeUndefined();
});