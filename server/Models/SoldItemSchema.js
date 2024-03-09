import mongoose from "mongoose";

const SoldItemSchema = new mongoose.Schema({
    item_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    item_type:{
        type: String,
        enum: ['HandWrittenNote', 'Book', 'QuestionAnswer'],
        required: true,
    },
    buyer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    seller_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    payment_mode:{
        type: String,
        enum: ['COD', 'Online'],
        required: true,
    },
    payment_id:{
        type: String,
        required: true,
    },
    dilvery_status:{
        type: String,
        enum: ['Pending', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    delivery_method:{
        type: String,
        enum: ['Self', 'Courier'],
        default: 'Self',
    }
},{timestamps: true});

const SoldItem = mongoose.model('SoldItem', SoldItemSchema);

export default SoldItem;