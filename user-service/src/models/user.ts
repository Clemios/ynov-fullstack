export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
export interface NewUser {
  name?: string;
  email: string;
  password: string;
}

export interface UserUpdate {
  name?: string;
  email?: string;
  password?: string;
}
