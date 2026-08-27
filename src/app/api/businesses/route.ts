import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const businesses = await prisma.business.findMany({
      skip,
      take: limit,
      include: {
        listings: true,
      },
    })

    const total = await prisma.business.count()

    return NextResponse.json({
      data: businesses,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch businesses' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const business = await prisma.business.create({
      data: {
        businessCode: body.businessCode,
        companyName: body.companyName,
        email: body.email,
        registrationNumber: body.registrationNumber,
        industry: body.industry,
        province: body.province,
        city: body.city,
        contactFirstName: body.contactFirstName,
        contactLastName: body.contactLastName,
        phone: body.phone,
        logoUrl: body.logoUrl,
        description: body.description,
      },
    })

    return NextResponse.json(business, { status: 201 })
  } catch (error) {
    console.error('Error creating business:', error)
    return NextResponse.json(
      { error: 'Failed to create business' },
      { status: 500 }
    )
  }
}
