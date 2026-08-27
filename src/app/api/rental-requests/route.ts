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
        { requesterId: businessId },
      ]
    }

    const rentalRequests = await prisma.rentalRequest.findMany({
      where,
      skip,
      take: limit,
      include: {
        listing: true,
        owner: true,
        requester: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    const total = await prisma.rentalRequest.count({ where })

    return NextResponse.json({
      data: rentalRequests,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching rental requests:', error)
    return NextResponse.json(
      { error: 'Failed to fetch rental requests' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const rentalRequest = await prisma.rentalRequest.create({
      data: {
        listingId: body.listingId,
        ownerId: body.ownerId,
        requesterId: body.requesterId,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
        message: body.message,
        status: body.status || 'pending',
      },
      include: {
        listing: true,
        owner: true,
        requester: true,
      },
    })

    return NextResponse.json(rentalRequest, { status: 201 })
  } catch (error) {
    console.error('Error creating rental request:', error)
    return NextResponse.json(
      { error: 'Failed to create rental request' },
      { status: 500 }
    )
  }
}
