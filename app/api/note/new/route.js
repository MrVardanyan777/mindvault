import { connectToDB } from "@utils/database";
import Note from '@models/Note';

export const POST = async (req) => {
    const { userId, note, heading } = await req.json();

    try {
        await connectToDB();
        const newNote = new Note( { creator: userId, note, heading} )

        await newNote.save();
        
        return new Response(JSON.stringify(newNote), { status: 201})
    } catch (error) {
        return new Response("Faild to create a new prompt", {status: 500})
    }
}