import connectMongo from "@/util/connect-mongo";
import Note from "@/util/modals/note";

// export const GET = async (req: Request,res:Response)=>{
//     console.log("Get Request...");
//     return Response.json({message:"Hello World!"});
// }

export const POST = async (req: Request, res: Response) => {
    try {
        await connectMongo();
        const note = await req.json();
        const newNote = new Note(note);
        await newNote.save();
        return Response.json(newNote)
    } catch (err) {
        console.log(err);
        return Response.json({ error: err })
    }
}

export const GET = async () => {
    try {
        await connectMongo();
        const notes = await Note.find();
        return Response.json(notes)
    } catch (err) {
        console.log(err);
        return Response.json({ error: err })
    }
}

export const DELETE = async () => {
    try {
        await connectMongo();
        await Note.deleteMany();
        return Response.json({ message: "Notes deleted!" })
    } catch (err) {
        console.log(err);
        return Response.json({ error: err })
    }
}