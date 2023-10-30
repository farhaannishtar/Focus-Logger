import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const API_URL = `https://www.rescuetime.com/anapi/daily_summary_feed?key=${process.env.NEXT_PUBLIC_RESCUE_TIME_API_KEY}`;

  try {
    const apiRes = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (apiRes.ok) {
      const data: any = await apiRes.json();
      return Response.json({ data });
    } else {
      res.status(apiRes.status).json({ error: "Failed to fetch data" });
    }
  } catch (error: any) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
