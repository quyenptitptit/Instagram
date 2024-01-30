import { Document } from "mongoose";
import { Post } from "src/post/post.schema";

export interface User extends Document {
    email: string
    password: string 
    fullname: string,
    avt: string,
    birthday: Date,
    gender: boolean,
    country: string,
    bio: string,
    posts: Post[],
    following: string[],
    follower: string[],
    saved: Post[]
}