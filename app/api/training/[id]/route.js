import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../lib/mongodb";

export async function GET(request, { params }) {
  try {
    const id = await params.id;

    const db = await connectToMongoDB();
    const trainingCollection = db.collection("courses");

    const training = await trainingCollection.findOne({ id });

    if (!training) {
      return NextResponse.json(
        { error: "Training not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(training);
  } catch (error) {
    console.error("Error fetching training details", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
