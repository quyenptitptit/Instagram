import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as Postt } from './post.schema';
import mongoose, { mongo } from 'mongoose';
import { UpdatePost } from './dto/update-post';

@Controller('posts')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    await this.service.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<Postt[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: mongoose.Schema.Types.ObjectId,
  ): Promise<Postt> {
    return this.service.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePost: UpdatePost,
  ): Promise<{ result: string }> {
    return this.service.update(id, updatePost);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ result: string }> {
    return this.service.delete(id);
  }
}
