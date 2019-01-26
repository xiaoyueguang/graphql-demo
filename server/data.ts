/** 文章 */
export interface Post {
  /** id */
  id: number;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 用户ID */
  userId: number;
  user?: User;
}

/** 用户 */
export interface User {
  /** id */
  id: number;
  /** 昵称 */
  nickname: string;
  /** 年龄 */
  age: number;
}

export const Posts: Post[] = [
  {
    id: 1,
    title: 'React 标题',
    content: 'React 内容',
    userId: 1
  },
  {
    id: 2,
    title: 'Vue 标题',
    content: 'Vue 内容',
    userId: 2
  },
  {
    id: 3,
    title: 'Angular 标题',
    content: 'Angular 内容',
    userId: 1
  }
]

export const Users: User[] = [
  {
    id: 1,
    nickname: '路人甲',
    age: 28
  },
  {
    id: 2,
    nickname: '路人乙',
    age: 82
  }
]
