import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { key } = body;

  try {
    const response = await fetch(
      `https://www.rescuetime.com/anapi/end_focustime?key=${key}`,
      {
        method: "POST",
      }
    );

    return NextResponse.json(
      { message: "Operation successful" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Operation failed" }, { status: 500 });
  }
}
