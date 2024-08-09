import connectMongo from "@/util/connect-mongo";
import Note from "@/util/modals/note";
import { type NextRequest } from 'next/server'

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        await connectMongo();
        const note = await Note.findById(req.nextUrl.searchParams.get('id'));
        if (note) {
            return Response.json(note);
        }
        return Response.json({ error: "Note not found" });
    }
    catch (err) {
        console.error(err);
        return Response.json({ error: err });
    }
}

export const PUT = async (req: Request, res: Response) => {
    console.log("PUT Request...");
    // update a post by id
    return Response.json({ message: "Hello World!" });
}

export const DELETE = async (req: Request, res: Response) => {
    console.log("DELETE Request...");
    // update a post by id
    return Response.json({ message: "Hello World!" });
}