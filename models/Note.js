import { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    note: {
         type: String,
         required: [true, 'Note is required']
    }, 
    heading: {
        type: String, 
        default: 'New Note'
    }, 
    createdAt: { 
        type: Date,
        default: Date.now
    }
})


const Note = models.Note || model("Note", NoteSchema);

export default Note;