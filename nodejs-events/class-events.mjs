// import { EventEmitter } from 'events';
import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on('likePost', (userName) =>
      console.log(`${userName} liked the post!`)
    );
    this.on('error', (error) => console.warn(error.message));
  }

  // like(userName = 'Anonymous') {
  like(userName) {
    if (!userName) {
      // console.log('error');
      return this.emit('error', new Error('UserName is required'));
    }
    this.likesQty += 1;
    this.emit('likePost', userName);
  }
}

const myPost = new Post('John', 'My first post');

// console.log(myPost);
myPost.like();
setTimeout(() => {
  myPost.like('Tom');
}, 2000);
