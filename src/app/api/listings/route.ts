import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const province = searchParams.get('province')
    const city = searchParams.get('city')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const where: any = { status: 'active' }
    if (category) where.category = category
    if (province) where.province = province
    if (city) where.city = city

    const listings = await prisma.listing.findMany({
      where,
      skip,
      take: limit,
      include: {
        business: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    const total = await prisma.listing.count({ where })

    return NextResponse.json({
      data: listings,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching listings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const listing = await prisma.listing.create({
      data: {
        businessId: body.businessId,
        assetCode: body.assetCode,
        title: body.title,
        description: body.description,
        category: body.category,
        listingType: body.listingType,
        province: body.province,
        city: body.city,
        dailyRate: body.dailyRate,
        weeklyRate: body.weeklyRate,
        monthlyRate: body.monthlyRate,
        salePrice: body.salePrice,
        status: body.status || 'active',
      },
      include: {
        business: true,
      },
    })

    return NextResponse.json(listing, { status: 201 })
  } catch (error) {
    console.error('Error creating listing:', error)
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    )
  }
}
