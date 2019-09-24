export class User {
    constructor(
  public login:string,
  public avatar_url:string,
  public html_url:string,
  public bio:string,
  public created_at:Date,
  public repositories:number,
  public follower:number,
  public followings:number){
    this.login;
    this.avatar_url;
    this.bio;
    this.created_at;
    this.follower;
    this.followings;
    this.repositories
  }
}
