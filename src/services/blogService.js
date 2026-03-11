import { BLOG_POSTS } from '../constants/blog';

/**
 * Returns all blog posts, optionally filtered by category and search query.
 * @param {{ category?: string, search?: string, limit?: number }} options
 * @returns {object[]} Filtered blog posts
 */
export const getBlogPosts = ({ category = 'All', search = '', limit = null } = {}) => {
  let posts = [...BLOG_POSTS];

  if (category && category !== 'All') {
    posts = posts.filter((p) => p.category === category);
  }

  if (search.trim()) {
    const q = search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  if (limit) posts = posts.slice(0, limit);

  return posts;
};

/**
 * Returns a single blog post by slug.
 * @param {string} slug
 * @returns {object|null}
 */
export const getBlogPostBySlug = (slug) =>
  BLOG_POSTS.find((p) => p.slug === slug) || null;

/**
 * Returns the latest N blog posts.
 * @param {number} count
 * @returns {object[]}
 */
export const getLatestPosts = (count = 3) => BLOG_POSTS.slice(0, count);

/**
 * Returns all unique blog categories.
 * @returns {string[]}
 */
export const getBlogCategories = () => {
  const cats = new Set(BLOG_POSTS.map((p) => p.category));
  return ['All', ...Array.from(cats)];
};
