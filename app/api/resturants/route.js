import { ConnectionStr } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(ConnectionStr,{useNewUrlParser:true})
    const data = await resturantSchema.find();
    console.log(data);

    return NextResponse.json({result:data})
}