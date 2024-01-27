import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostSchema } from './post.schema';
import mongoose, { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePost } from './dto/update-post';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  async create(createPost: CreatePostDto): Promise<Post> {
    try {
      const created = await this.model.create(createPost);
      return created;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Post[]> {
    try {
      return this.model.find().exec();
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: mongoose.Schema.Types.ObjectId): Promise<Post> {
    try {
      return this.model.findById(id);
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    id: string,
    updatePost: UpdatePost,
  ): Promise<{ result: string }> {
    try {
      await this.model.findByIdAndUpdate(id, updatePost);
      return { result: 'update success' };
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<{ result: string }> {
    try {
      await this.model.findByIdAndDelete(id);
      return { result: 'delete success' };
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
}
