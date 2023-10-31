import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", req.body);
  const body = await req.json();
  const { key, duration } = body;
  const url = `https://www.rescuetime.com/anapi/start_focustime?key=${key}&duration=${duration}`;
  console.log("Request URL:", url);

  try {
    const response = await fetch(
      `https://www.rescuetime.com/anapi/start_focustime?key=${key}&duration=${duration}`,
      {
        method: "POST",
        // body: `key=${key}&duration=${duration}`,
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
