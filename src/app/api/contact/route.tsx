import mongoose from "mongoose";
import Contact from "@/model/contact";
import db from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        // ✅ Parse request body
        const body = await req.json();
        const { fullname, email, phone, message } = body;

        // ✅ Connect to database
        await db.connect();

        // ✅ Create new contact entry
        await Contact.create({ fullname, email, phone, message });

        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList: string[] = Object.values(error.errors).map((e: any) => e.message);
            console.log("❌ Validation Errors:", errorList);
            return NextResponse.json({ msg: errorList }, { status: 400 });
        } else {
            console.error("❌ Server Error:", error);
            return NextResponse.json({ msg: ["Unable to send message."] }, { status: 500 });
        }
    } finally {
        // ✅ Ensure database connection is closed after processing
        await db.disconnect();
    }
};
