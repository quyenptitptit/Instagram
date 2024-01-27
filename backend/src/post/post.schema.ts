import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Comment } from 'src/comment/comment.schema';
import { User } from 'src/user/user.schema';

// export const PostSchema = new mongoose.Schema({
//     img: String,
//     caption: String,
//     like: [String],
//     cmt: [String]
// })

@Schema({ timestamps: true })
export class Post {
  @Prop([String])
  img: string[];

  @Prop({ required: true })
  caption: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true})
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  like: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' })
  cmt: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
