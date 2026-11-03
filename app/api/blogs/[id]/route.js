import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../lib/mongodb";

export async function GET(request, { params }) {
  try {
    const id = parseInt(await params.id, 10);

    const db = await connectToMongoDB();
    const blogsCollection = db.collection("blogs");

    const blog = await blogsCollection.findOne({ id });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
