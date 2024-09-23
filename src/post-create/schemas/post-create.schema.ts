import { Schema , Document } from "mongoose";


export interface PostCreate extends Document {
        email:string,
        password:string,
        confirmPassword:string,
        name:string,
        jwt:string
}


export const PostCreate = new Schema({
    postTitle: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        default: null
    },
    price: {
        type: String,
        default: null
    },
    perHour: {
        type: Boolean,
        default: false
    },
    perDay: {
        type: Boolean,
        default: false
    },
})