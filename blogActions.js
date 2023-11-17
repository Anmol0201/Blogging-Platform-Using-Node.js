// Write your code here
import fs from 'fs';

export const writeBlog = (filePath, userBlog) => {
  try {
    fs.writeFileSync(filePath, userBlog);
    console.log('Blog successfully saved!');
  } catch (error) {
    console.error('Error writing the blog:', error.message);
  }
};

export const publishBlog = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Error reading the blog:', error.message);
    return null;
  }
};