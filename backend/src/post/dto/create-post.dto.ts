import { IsEmpty } from "class-validator"


export class CreatePostDto {
    @IsEmpty()
    img: string[]

    @IsEmpty()
    caption: string

    @IsEmpty()
    author: string 
}