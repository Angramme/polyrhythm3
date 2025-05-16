import type { NextApiRequest, NextApiResponse } from 'next'
import feedback from "lib/schemas/feedback";
import connectDB from "lib/connectDB"
import { Types } from 'mongoose';

export type ResponseData = {
    id: Types.ObjectId
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    console.log("trying to connect to DB")
    await connectDB()
    console.log("connected")
    
    const { data, id } = JSON.parse(req.body);

    console.log("from server", data, id)
    const person = new feedback({
        data, id
    });
    await person.save()
    res.status(200).json({ id })
  }