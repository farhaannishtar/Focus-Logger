import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const API_URL = `https://www.rescuetime.com/anapi/daily_summary_feed?key=${process.env.NEXT_PUBLIC_RESCUE_TIME_API_KEY}`;

  try {
    const apiRes = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (apiRes.ok) {
      let data: any = await apiRes.json();
      data = data[0].very_productive_duration_formatted;
      return NextResponse.json({ data });
    } else {
      return NextResponse.json(
        { message: "Operation failed" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Operation failed" }, { status: 500 });
  }
}
