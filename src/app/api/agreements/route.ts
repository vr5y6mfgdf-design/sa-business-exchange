import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const businessId = searchParams.get('businessId')
    const skip = (page - 1) * limit

    const where: any = {}
    if (status) where.status = status
    if (businessId) {
      where.OR = [
        { ownerId: businessId },
        { renterId: businessId },
      ]
    }

    const agreements = await prisma.agreement.findMany({
      where,
      skip,
      take: limit,
      include: {
        listing: true,
        owner: true,
        renter: true,
        documents: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    const total = await prisma.agreement.count({ where })

    return NextResponse.json({
      data: agreements,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching agreements:', error)
    return NextResponse.json(
      { error: 'Failed to fetch agreements' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const agreement = await prisma.agreement.create({
      data: {
        agreementCode: body.agreementCode,
        listingId: body.listingId,
        ownerId: body.ownerId,
        renterId: body.renterId,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
        rentalFee: body.rentalFee,
        deposit: body.deposit,
        status: body.status || 'active',
      },
      include: {
        listing: true,
        owner: true,
        renter: true,
        documents: true,
      },
    })

    return NextResponse.json(agreement, { status: 201 })
  } catch (error) {
    console.error('Error creating agreement:', error)
    return NextResponse.json(
      { error: 'Failed to create agreement' },
      { status: 500 }
    )
  }
}
