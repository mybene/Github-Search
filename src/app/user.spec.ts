import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('','','','',new Date(),0,0,0)).toBeTruthy();
  });
});
