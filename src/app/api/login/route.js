import mongoose from "mongoose";
import Student from "../../../../lib/models/students";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Successfully connected to MongoDB");
    }
    const { email, password } = await req.json();

    const student = await Student.findOne({ email, password });
    if (student) {
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, // 1 ghanta alive
        path: "/",
      };
      const cookie = `username=${student.email}; HttpOnly; Max-Age=${cookieOptions.maxAge}; Path=${cookieOptions.path}; ${
        cookieOptions.secure ? "Secure;" : ""
      }`;
      const response = NextResponse.json(student, { status: 200 });
      response.headers.append('Set-Cookie', cookie);
      return response;
    } else {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      { message: "Error connecting to MongoDB", error },
      { status: 500 },
    );
  }
}
