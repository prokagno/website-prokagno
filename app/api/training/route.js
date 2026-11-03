import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../lib/mongodb";

export async function GET() {
  try {
    const db = await connectToMongoDB();
    const trainingCollection = db.collection("courses");

    const trainings = await trainingCollection.find().toArray();

    return NextResponse.json(trainings);
  } catch (error) {
    console.error("Error fetching training data", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
