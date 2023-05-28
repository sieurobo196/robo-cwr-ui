export class Post {
  id: number = 0;
  title: string = '';
  url: string = '';
  type: string = '';
  content: string = '';

  constructor(id: number, title: string, url: string, type: string, content: string) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.type = type;
    this.content = content;
  }
}
