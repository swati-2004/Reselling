import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    subject:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    class:{
        type: String,
        required: true,
    },
    publication_year:{
        type: Number,
        required: true,
    },
    publication_name:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        default: 1,
        min: [0, 'Quantity can not be less than 0'],
    },
    orginal_price:{
        type: Number,
        required: true,
    },
    selling_price:{
        type: Number,
        required: true,
    },
    seller_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    college_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
    },
    volume:{
        type: Number,
        default: 1,
    },
    language:{
        type: String,
        enum:['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Bengali', 'Gujarati', 'Marathi', 'Punjabi', 'Odia', 'Urdu', 'Assamese', 'Nepali', 'Sanskrit', 'Konkani', 'Manipuri', 'Bodo', 'Dogri', 'Kashmiri', 'Maithili', 'Santali', 'Sindhi'],
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    location:{
        type: Object,
        required: true,
    },
    tags:{
        type: [String],
        default: [],
    }
}, {timestamps: true});

const Book = mongoose.model('Book', BookSchema);

export default Book;