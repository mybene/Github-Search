export class User {
    constructor(
  public login:string,
  public avatar_url:string,
  public bio:string,
  public created_at:Date,
  public public_repos:number){}
}
