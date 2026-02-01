import blogPostsData from './blog-posts.json';

export interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  slug: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
  pinned?: boolean;
}

export const blogPosts: BlogPost[] = blogPostsData as BlogPost[];

// Helper functions
export const getFeaturedPosts = (excludeSlug?: string): BlogPost[] => {
  return blogPosts.filter(post => post.featured && post.slug !== excludeSlug);
};

export const getPinnedPosts = (excludeSlug?: string): BlogPost[] => {
  return blogPosts.filter(post => post.pinned && post.slug !== excludeSlug);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRegularPosts = (excludeSlug?: string): BlogPost[] => {
  return blogPosts.filter(post => !post.featured && post.slug !== excludeSlug);
};

export const getAllPosts = (excludeSlug?: string): BlogPost[] => {
  return blogPosts.filter(post => post.slug !== excludeSlug);
};
