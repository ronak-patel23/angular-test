export interface UserModel {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;
  gender: string;
  hobbies: { [k: string]: boolean };
  company: string;
}

export const Hobbies = [
    'music',
    'dancing',
    'movie',
    'reading',
    'travelling'
  ];