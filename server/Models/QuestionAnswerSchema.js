import mongoose from "mongoose";

const QuestionAnswerSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true,
    },
    impressions:{
        type: Number,
        default: 0,
    },
    answers:{
        type: Number,
        default: 0,
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
    tags:{
        type:[String],
        default: [],
    }
},{timestamps: true});

const QuestionAnswer = mongoose.model('QuestionAnswer', QuestionAnswerSchema);

export default QuestionAnswer;