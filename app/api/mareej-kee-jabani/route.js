// app/api/mareej-kee-jabani/route.js
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, problem, recovery } = body;

    // Validation
    if (!name || !problem || !recovery) {
      return NextResponse.json(
        { error: "कृपया सभी फील्ड भरें" },
        { status: 400 }
      );
    }

    // Create document in Sanity
    const doc = {
      _type: "mareejKeeJabani",
      name,
      problem,
      recovery,
      publishedAt: new Date().toISOString(),
      isApproved: false,
    };

    const result = await client.create(doc);

    return NextResponse.json(
      {
        success: true,
        message: "आपका अनुभव सफलतापूर्वक सबमिट हो गया है।",
        id: result._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating mareej kee jabani:", error);
    return NextResponse.json(
      { error: "कुछ गड़बड़ी हुई। कृपया दोबारा कोशिश करें।" },
      { status: 500 }
    );
  }
}
