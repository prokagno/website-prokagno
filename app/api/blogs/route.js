import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../lib/mongodb";

export async function GET() {
  try {
    const db = await connectToMongoDB();
    const blogsCollection = db.collection("blogs");

    const blogs = await blogsCollection.find().toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
