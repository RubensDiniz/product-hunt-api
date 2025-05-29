export type Post = {
  id: string;
  name: string;
  tagline: string;
  votesCount: number;
  url: string;
  thumbnail: {
    url: string;
  };
  user: {
    name: string;
  };
};

export type GetPostsData = {
  posts: {
    edges: {
      node: Post
    }[];
  };
};
