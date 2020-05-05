
export class Chat {
  content: string | null | any | Blob;
  avatar: string;

  constructor(content: string | null | any | Blob, avatar: string) {
    this.content = content;
    this.avatar = avatar;
  }
}
