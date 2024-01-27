import { Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";

export class BaseSchema {
    @Prop({default: null})
    deleted_at: Date
}