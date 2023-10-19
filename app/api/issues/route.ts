import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";


export async function GET(request:NextRequest){
   const Issues = await prisma.issue.findMany();
   return NextResponse.json(Issues);
}

export async function POST(request:NextRequest){
    const body = await request.json()

    const validation = schema.safeParse(body);
    if(!validation.success)
       return NextResponse.json(validation.error.errors,{status:400})

    const Issue = await prisma.issue.create({
        data:{
            title: body.title,
            description: body.description,
            status : body.status 
        }
    })

    return NextResponse.json(Issue,{status:201})
}
