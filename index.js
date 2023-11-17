import readline from 'readline';
import { writeBlog, publishBlog } from './blogActions.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const filePath = 'myblog.txt';

rl.question('Enter your blog: ', (userBlog) => {
  writeBlog(filePath, userBlog);
  const publishedBlog = publishBlog(filePath);
  console.log('Published Blog:', publishedBlog);
  rl.close();
});