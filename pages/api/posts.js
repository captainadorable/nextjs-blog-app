import { getPosts } from "../../src/blog-posts";

const posts = getPosts();

export default (req, res) => {
  res.json({ posts });
};
