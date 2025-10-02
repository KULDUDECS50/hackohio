import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Define the path to your JSON file
const jsonFilePath = path.join(process.cwd(), "data", "waitlist.json");

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });

    let waitlist = [];
    try {
      // Read the existing waitlist data
      const currentData = await fs.readFile(jsonFilePath, "utf-8");
      waitlist = JSON.parse(currentData);
    } catch (readError: any) {
      // If the file doesn't exist, start with an empty array.
      // Do nothing if the error is "file not found."
      if (readError.code !== "ENOENT") {
        console.error("Error reading waitlist.json:", readError);
        return NextResponse.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
      }
    }

    // Add the new email entry
    const newEntry = {
      email,
      submittedAt: new Date().toISOString(),
    };

    // Append the new entry to the array
    waitlist.push(newEntry);

    // Write the entire updated array back to the JSON file
    await fs.writeFile(jsonFilePath, JSON.stringify(waitlist, null, 2));

    return NextResponse.json(
      { message: "Success! Your email has been added." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to process waitlist request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
