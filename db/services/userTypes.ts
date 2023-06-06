export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserCreateResponse {
  _id: string
}

export type UserLogin = Pick<IUserCreate, 'email' | 'password'> 