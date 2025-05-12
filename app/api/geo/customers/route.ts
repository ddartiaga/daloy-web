import { NextResponse } from "next/server";
import { getGeoFeaturesByEntity } from "@/components/customer/server-actions";

export async function GET() {
  try {
    const features = await getGeoFeaturesByEntity("customer");
    return NextResponse.json(features);
  } catch (error) {
    console.error("Failed to fetch features:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
