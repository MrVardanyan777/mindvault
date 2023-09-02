import { connectToDB } from "@utils/database";
import Note from '@models/Note';

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const note = await Note.findById(params.id).populate('creator');
        if(!note) return new Response("Note is not found", {status: 404})

        return new Response (JSON.stringify(note), {status: 200})
    } catch (error) {
        return new Response ("Faild to find Notes", {status: 500})
    }
} 

export const PATCH = async (request, { params }) => {
    const { note, heading } = await request.json();
    
    try {
        await connectToDB();

        const exsitingNote = await Note.findById(params.id); 

        if(!exsitingNote) return new Response("Note is not found!", { status: 404 });

        exsitingNote.note = note;
        exsitingNote.heading = heading;
        await exsitingNote.save();

        return new Response(JSON.stringify(exsitingNote), { status: 200 })
    } catch (error) {
        return new Response("Faild to edit the Note", { status: 500} )
    }
}

export const DELETE = async (request, { params}) => {
    try {
        await connectToDB();

        await Note.findByIdAndRemove(params.id)

        return new Response("Note was deleted!", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete the Note", { stsus: 500 })
    }
}