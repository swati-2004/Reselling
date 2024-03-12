import mongoose from "mongoose";

const HandWrittenNoteSchema = new mongoose.Schema({
    subject:{
        type: String,
        required: true,
    },
    language:{
        type: String,
        enum:['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Bengali', 'Gujarati', 'Marathi', 'Punjabi', 'Odia', 'Urdu', 'Assamese', 'Nepali', 'Sanskrit', 'Konkani', 'Manipuri', 'Bodo', 'Dogri', 'Kashmiri', 'Maithili', 'Santali', 'Sindhi'],
        required: true,
    },
    selling_price:{
        type: Number,
        required: true,
        min: [0, 'Selling price can not be negative']
    },
    file_url:{
        type: String,
        required: true,
    },
    preview_url:{
        type: String,
        required: true,
    },
    number_of_pages:{
        type: Number,
        required: true,
        min: [0, 'Number of pages can not be negative']
    },
    topics:{
        type: [String],
        default: [],
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
    downloads:{
        type: Number,
        default: 0,
        min: [0, 'Downloads can not be negative']
    },
    tags:{
        type:[String],
        default: [],
    }
},{timestamps: true});

const HandWrittenNote = mongoose.model('HandWrittenNote', HandWrittenNoteSchema);

export default HandWrittenNote;