import ConnectMongoDb from "@/libs/MongoDb"
import Topic from "@/models/Topics"
import { NextResponse } from "next/server"

export async function POST(request) {
    const { title, description } = await request.json()
    await ConnectMongoDb()
    await Topic.create({ title, description })
    return NextResponse.json({ message: "topic created *" }, { status: 201 })
}

export async function GET() {
    await ConnectMongoDb()
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}