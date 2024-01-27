import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Post } from 'src/post/post.schema';
import { GENDER } from 'src/common/enum';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, minlength: 6, maxlength: 20, unique: true })
  username: string;

  @Prop({ required: true, minlength: 6, maxlength: 20, select: false })
  password: string;

  @Prop({
    required: true,
    unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({
    default:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  })
  avt: string;

  @Prop()
  birthday: Date;

  @Prop({enum: GENDER})
  gender: string;

  @Prop()
  country: string;

  @Prop()
  bio: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  posts: Post[];

  @Prop([String])
  following: string[];

  @Prop([String])
  follower: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  saved: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
