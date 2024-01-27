import { Post } from '../post.schema';
import { PartialType } from '@nestjs/swagger';

export class UpdatePost extends PartialType(Post) {}
