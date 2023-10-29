import { connectMongoDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(req) {
  try {
    const {
      name,
      email,
      phoneNo,
      bloodGroup,
      age,
      allergy,
      adahar,
      description,
      gender,
      prescription,
    } = await req.json();

    await connectMongoDb();

    // Create a new user with all the properties
    await User.create({
      name,
      email,
      phoneNo,
      bloodGroup,
      age,
      allergy,
      adahar,
      description,
      gender,
      prescription,
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.error("Error registering user", { status: 500 });
  }
}
