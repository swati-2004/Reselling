import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    comment_type:{
        type: String,
        enum:["HandWrittenNote","QuestionAnswer"],
        required: true,
    },
    comment:{
        type: String,
        required: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    user_name:{
        type: String,
        required: true,
    },
    user_image:{
        type: String,
        required: true,
    },
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
},{timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;