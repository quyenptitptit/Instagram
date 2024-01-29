import { IsNotEmpty } from "class-validator"


export class CreatePostDto {
    @IsNotEmpty()
    img: string[]

    @IsNotEmpty()
    caption: string

    @IsNotEmpty()
    author: string 
}