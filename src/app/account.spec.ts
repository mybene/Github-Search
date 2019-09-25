import { Account } from './account';

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account("","", "","","",new Date(),0,0)).toBeTruthy();
  });
});
