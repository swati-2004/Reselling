import mongoose from 'mongoose';

const CollegeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        enum: ['India', 'USA', 'Canada', 'UK'],
        default: 'India'
    },
    state:{
        type: String,
        enum: ["India", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
        required: true,
    },
    district:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    pincode:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    mobile:{
        type: String,
        unique: true,
        required: true,
    },
    image:{
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nameslook.com%2Fsdfgdf&psig=AOvVaw2xv_EgJ0FpqFiLEL_nHBJ6&ust=1709839719429000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj3iL-v4IQDFQAAAAAdAAAAABAD'
    },
    location:{
        type: Object,
        required: true,
    }              
}, {timestamps: true});

const College = mongoose.model('College', CollegeSchema);

export default College;