import connectDB from "@/lib/db";
import Member from "@/components/platform/member/model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, dob, address, gender, rank, interest, skill, club, image, contact } = await request.json() as { 
    name: string, 
    dob: string, 
    address: string, 
    gender: string, 
    rank: string, 
    interest: string, 
    skill: string, 
    club: string,
    image: string,
    contact: { phone: string, facebook: string, whatsapp: string } 
  };

  console.log({ name, dob, address, gender, rank, interest, skill, club, image, contact });
  
  await connectDB();
  
  const member = new Member({
    name,
    dob,
    address,
    gender,
    rank,
    interest,
    skill,
    club,
    image,
    contact: contact
  });
  
  await member.save();
  
  return NextResponse.json({ message: "Member Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const members = await Member.find() as unknown[];
  return NextResponse.json({ members });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Member.findByIdAndDelete(id);
  return NextResponse.json({ message: "Member deleted" }, { status: 200 });
}
