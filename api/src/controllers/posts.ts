import { Request, Response, NextFunction } from 'express';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    let posts: [Post] = [
      {
        userId: 1,
        id: 1,
        title: "title",
        body: "body"
      }
    ];
    return res.status(200).json({
        message: posts
    });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {

    const post: Post = {
      id: parseInt(req.params.id),
      title: req.body.title,
      body: req.body.body,
      userId: 1
    }

    return res.status(200).json({
        message: post
    });
};

export default { getPosts, updatePost };