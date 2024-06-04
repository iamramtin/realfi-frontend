import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';

import { User } from '../../../types/User';

const data = `Name,Surname,Number,Gender,Country,Dependants,BirthDate
Jack,Front,123,Male,Latvia,5,10/3/1981
Jill,Human,654,Female,Spain,0,6/2/1983
Robert,Pullman,456,Male,German,2,5/4/1999
Chun Li,Suzuki,987,Female,China,1,11/9/2001
Sarah,Van Que,587,Female,Latvia,4,6/22/1989`;

export async function GET() {
    const parsedData = Papa.parse<User>(data, {
        header: true,
        dynamicTyping: true,
    }).data;

    return new NextResponse(JSON.stringify(parsedData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request: NextRequest) {
    const newUser = await request.json();

    // Process and store the new data, but since it's a mock example, let's just return the new user
    return NextResponse.json(newUser, { status: 201 });
}

export function OPTIONS() {
    return new NextResponse(null, {
        headers: {
            'Allow': 'GET, POST, OPTIONS',
        }
    });
}